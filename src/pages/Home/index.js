import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navegation';


import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';


// Icons import
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';



// import { Container } from './styles';

function Home() {

  const [unreadMenu, setUnreadMenu] = React.useState(false);
  const [everythingMenu, setEverythingMenu] = React.useState(false);
  

  return (
    <div>
      <Layout.Header>
        <Header/>
      </Layout.Header>
      <Layout.SidePane>
          <Box
            sx={{
              p: 2,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '.1rem',
              }}
            >
              Unread
            </Typography>
            <IconButton
              size="sm"
              variant="plain"
              color="primary"
              sx={{ '--IconButton-size': '24px' }}
              onClick={() => {
                setUnreadMenu(!unreadMenu)
              }}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          {unreadMenu && (
            <Box sx={{ py: 10 }}>
              <Typography
                textColor="text.tertiary"
                level="body2"
                sx={{ textAlign: 'center' }}
              >
                You&apos;ve read all messages in your inbox.
              </Typography>
            </Box>)}
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '.1rem',
              }}
            >
              Everything else
            </Typography>
            <IconButton
              size="sm"
              variant="plain"
              color="primary"
              sx={{ '--IconButton-size': '24px' }}
              onClick={() => {
                setEverythingMenu(!everythingMenu)
              }}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
        </Layout.SidePane>
      <h1>Home</h1>
      <Footer/>
    </div>
  );
}

export default Home;