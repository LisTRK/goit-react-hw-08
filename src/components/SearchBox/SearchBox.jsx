import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const [query, setQuery] = useState(value);
  const [debounce] = useDebounce(query, 1500);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(changeFilter(debounce));
  }, [debounce]);

  return (
    <section className={css.sectionSearchBox}>
      <div className="container">
        <h2>Find contacts</h2>
        <input
          className={css.inputName}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search contacts"
        />
      </div>
    </section>
  );
};

export default SearchBox;
