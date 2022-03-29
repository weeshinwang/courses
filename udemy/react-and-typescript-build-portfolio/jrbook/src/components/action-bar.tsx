import { useActions } from '../hooks/use-action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/action-bar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className='action-bar'>
      <button
        onClick={() => moveCell(id, 'up')}
        className='button is-info is-small'
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </button>
      <button
        onClick={() => moveCell(id, 'down')}
        className='button is-info is-small'
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </button>
      <button
        onClick={() => deleteCell(id)}
        className='button is-danger is-small'
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </button>
    </div>
  );
};

export default ActionBar;
