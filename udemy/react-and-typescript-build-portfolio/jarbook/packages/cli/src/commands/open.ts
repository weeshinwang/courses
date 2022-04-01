import path from 'path';
import { Command } from 'commander';
import { open } from '@jarbook/local-api';

interface OptionsType {
  port: string;
}

interface ErrorType {
  message?: string;
  code?: string;
}

const isProduction = process.env.NODE_ENV === 'production';

export const openCommand = new Command()
  .command('open [filename]')
  .description('open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: OptionsType) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await open(
        parseInt(options.port),
        path.basename(filename),
        dir,
        !isProduction
      );
      console.log(
        `You can now edit ${filename} in the browser on http://localhost:${options.port}`
      );
    } catch (error: unknown) {
      const err = error as ErrorType;
      if (err.code === 'EADDRINUSE') {
        console.log(
          `!!! ERROR => port ${options.port} is in use, try another port.`
        );
      } else {
        console.log('!!! ERROR => ', err.message);
      }
      process.exit(1);
    }
  });
