import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterContainer } from './Register.styled';

export default function Register() {
  return (
    <RegisterContainer>
      <h2>Registration</h2>
      <RegisterForm />
    </RegisterContainer>
  );
}
