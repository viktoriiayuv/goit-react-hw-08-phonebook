import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormContainer } from './RegisterForm.styled';
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
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      {/* <label className="label">
        Username
        <input type="text" name="name" />
      </label>
      <label className="label">
        Email
        <input type="email" name="email" />
      </label>
      <label className="label">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button> */}
      <FormControl sx={{ mb: 2, width: 1 }}>
        <TextField
          id="outlined-basic"
          label=" Username"
          variant="outlined"
          name="name"
          required
        />
      </FormControl>
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
          Register
        </Button>
      </FormControl>
    </FormContainer>
  );
};
