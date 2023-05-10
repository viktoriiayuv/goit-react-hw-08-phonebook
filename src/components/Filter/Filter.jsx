import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { TextField, FormControl } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default Filter;
