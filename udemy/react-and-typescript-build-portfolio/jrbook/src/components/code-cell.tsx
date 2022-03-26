import Preview from './preview';
import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import bundler from '../bundler';
import Resizable from './resizable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundler(input);
      setCode(output.code);
      setError(output.error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor initialValue='' onChange={(value) => setInput(value)} />
        </Resizable>
        <Preview code={code} errorStatus={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
