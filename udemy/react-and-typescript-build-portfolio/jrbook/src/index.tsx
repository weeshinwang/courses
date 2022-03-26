// import 'bulmaswatch/nuclear/bulmaswatch.min.css';
import 'bulma/css/bulma.min.css';
import './styles/global-styles.css';
import ReactDOM from 'react-dom';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
