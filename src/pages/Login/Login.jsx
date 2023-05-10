import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginContainer } from './Login.styled';

export default function Login() {
  return (
    <LoginContainer>
      <h2>Log In</h2>
      <LoginForm />
    </LoginContainer>
  );
}
