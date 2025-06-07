import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';

export default function SearchBox() {
  const queryLocation = useSelector(selectNameFilter);
  const [query, setQuery] = useState(queryLocation);
  const [debounce] = useDebounce(query, 1500);
  const dispatch = useDispatch();

  const inputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(changeFilter(debounce));
  }, [debounce]);

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        type="text"
        value={query}
        onChange={inputChange}
        id="searchBox"
        autoFocus
      />
    </div>
  );
}
