import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserMenuContainer } from './UserMenu.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <p className="username">Welcome, {user.name}</p>
      <Button
        color="inherit"
        type="button"
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserMenuContainer>
  );
};
