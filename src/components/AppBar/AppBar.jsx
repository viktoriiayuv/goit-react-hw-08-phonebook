import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppHeader } from './AppBar.styled';
import AppBarUI from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader>
      <AppBarUI position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBarUI>
    </AppHeader>
  );
};
