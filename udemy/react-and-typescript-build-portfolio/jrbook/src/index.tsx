import 'bulma/css/bulma.min.css';
import './styles/global-styles.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
// import CodeCell from './components/code-cell';
// import TextEditor from './components/text-editor';
import CellList from './components/cell-list';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
