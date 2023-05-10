import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormContainer } from './LoginForm.styled';

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

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Email
        <input type="email" name="email" />
      </label>
      <label className="label">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </FormContainer>
  );
};
