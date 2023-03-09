import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

// custom
import { useNavigate } from 'react-router-dom';


function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="primary"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

function Header() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [search, setSearch] = React.useState('');

  const navegate = useNavigate();

  return (
    <>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <IconButton
          variant="outlined"
          size="sm"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          size="sm"
          variant="solid"
          sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
        >
          <HomeIcon />
        </IconButton>
        <Typography component="h1" fontWeight="xl" minWidth={100}>
          Home
        </Typography>
      </Box>
      <Input
        size="sm"
        placeholder="Search anything…"
        startDecorator={<SearchRoundedIcon color="primary" />}
        endDecorator={
          <IconButton variant="outlined" size="sm" color="neutral"
            onClick={() => {
              setSearch('');
            }}
          >
            /
          </IconButton>
        }
        sx={{
          flexBasis: '500px',
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
        <IconButton
          size="sm"
          variant="outlined"
          color="primary"
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
        >
          <SearchRoundedIcon />
        </IconButton>
        {/* <ColorSchemeToggle /> */}
        {!sessionStorage.getItem('user') &&
          <IconButton
            size="sm"
            variant="solid"
            color="primary"
            sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            onClick={() => {
              navegate('/login')
            }}
          >
            <LoginIcon />
          </IconButton>}
        {!sessionStorage.getItem('user') &&
          <IconButton
            size="sm"
            variant="solid"
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            onClick={() => {
              navegate('/login')
            }}
          >
            <LoginIcon />
          </IconButton>}
      </Box>
    </>
  );
}

export default Header;