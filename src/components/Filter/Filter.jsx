import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { FilterContainer } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <input
        onChange={({ target: { value } }) => dispatch(changeFilter(value))}
        type="text"
        name="filter"
      ></input>
    </FilterContainer>
  );
};

export default Filter;
