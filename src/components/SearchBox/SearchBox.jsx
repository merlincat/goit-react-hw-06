import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
export default SearchBox;
