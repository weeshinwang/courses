import * as esbuild from 'esbuild-wasm';
import { fetchPlugin } from './plugins/fetch-plugin';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';

let service: esbuild.Service;

const bundler = async (rawCode: string) => {
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  }

  try {
    const result = await service.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
      jsxFactory: '_React.createElement',
      jsxFragment: '_React.Fragment',
    });
    return {
      code: result.outputFiles[0].text,
      error: '',
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        code: '',
        error: err.message,
      };
    } else {
      return {
        code: '',
        error: '',
      };
    }
  }
};

export default bundler;
