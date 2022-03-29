import '../styles/add-cell.css';
import { useActions } from '../hooks/use-action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <button
          className='button is-link is-small is-rounded'
          onClick={() => insertCellAfter(previousCellId, 'code')}
        >
          <FontAwesomeIcon icon={faPlus} />
          Code
        </button>
        <button
          className='button is-link is-small is-rounded'
          onClick={() => insertCellAfter(previousCellId, 'text')}
        >
          <FontAwesomeIcon icon={faPlus} />
          Text
        </button>
      </div>
      <div className='add-cell-divider'></div>
    </div>
  );
};

export default AddCell;
