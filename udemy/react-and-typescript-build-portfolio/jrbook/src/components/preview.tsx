import { useRef, useEffect } from 'react';
import '../styles/preview.css';

interface PreviewProps {
  code: string;
  errorStatus: string;
}

const html = `
<html>
<head>
  <style>html {font-family: 'Jetbrains Mono', monospace}</style>
</head>
<body>
  <div id="root"></div>
  <script>
    const handleError = (err) => {
      const root = document.querySelector('#root');
      root.innerHTML = '<div style="color: #DA0037;"><h4>Runtime Error</h4>' + err + '</div>';
      console.error(err);
    }

    window.addEventListener('error', (event) => {
      handleError(event.error)
    })

    window.addEventListener('message', (event) => {
      try {
        eval(event.data);
      } catch (err) {
        handleError(err);
      }
    }, false);
  </script>
</body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, errorStatus }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe title='PRE' ref={iframe} sandbox='allow-scripts' srcDoc={html} />
      {errorStatus && <div className='preview-error'>{errorStatus}</div>}
    </div>
  );
};

export default Preview;
