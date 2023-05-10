import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormContainer } from './LoginForm.styled';
import {
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <FormControl sx={{ mb: 2, width: 1 }}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          required
        />
      </FormControl>
      <FormControl sx={{ mb: 2, width: 1 }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          name="password"
          required
        />
      </FormControl>
      <FormControl sx={{ width: 1 }}>
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </FormControl>
    </FormContainer>
  );
};
