import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { FilterContainer } from './Filter.styled';
import { TextField, FormControl } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      {/* <p>Find contacts by name</p>
      <input
        onChange={({ target: { value } }) => dispatch(changeFilter(value))}
        type="text"
        name="filter"
      ></input> */}
      <FormControl sx={{ mb: 2, width: 1 }}>
        <TextField
          id="outlined-basic"
          label="Find contacts by name"
          variant="outlined"
          onChange={({ target: { value } }) => dispatch(changeFilter(value))}
          type="text"
          name="filter"
        />
      </FormControl>
    </FilterContainer>
  );
};

export default Filter;
