import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

interface ErrorType {
  message?: string;
  code?: string;
}

export const createCellRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());
  const fullPath = path.join(dir, filename);

  router.get('/cell', async (req, res) => {
    try {
      const result = await fs.readFile(fullPath, { encoding: 'utf-8' });
      res.send(JSON.parse(result));
    } catch (error: unknown) {
      const err = error as ErrorType;
      if (err.code === 'ENOENT') {
        await fs.writeFile(fullPath, '[]', 'utf-8');
      } else {
        throw error;
      }
    }
  });

  router.post('/cell', async (req, res) => {
    const { cell }: { cell: Cell[] } = req.body;

    await fs.writeFile(fullPath, JSON.stringify(cell), 'utf-8');

    res.send({ staus: 'OK' });
  });

  return router;
};
