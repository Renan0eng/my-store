import * as React from 'react';
import { useNavigate } from "react-router-dom"

import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import HomeIcon from '@mui/icons-material/Home';

// Icons import
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function FeedNav() {

  const Menus = {
    Browse: [
      {
        label: 'Home',
        href: '/',
        icon: <HomeIcon fontSize="small" color="primary" />,
      },
    ]
  }

  React.useEffect(() => {

  if(!sessionStorage.getItem('user')){
    setMenus({
      Browse: [
        {
          label: 'Home',
          href: '/',
          icon: <HomeIcon fontSize="small" color="primary" />,
        },
        // {
        //   label: 'Team',
        //   href: '/team',
        //   icon: <DraftsRoundedIcon fontSize="small" color="primary" />,
        // },
      ],
      Tags: [
        {
          label: 'Personal',
          href: '/personal',
          bgcolor: 'primary.100',
        },
        {
          label: 'Work',
          href: '/work',
          bgcolor: 'danger.300',
        },
        {
          label: 'Family',
          href: '/family',
          bgcolor: 'success.300',
        },
        {
          label: 'Friends',
          href: '/friends',
          bgcolor: 'warning.300',
        },
        {
          label: 'Travel',
          href: '/travel',
          bgcolor: 'info.300',
        },
        {
          label: 'Holidays',
          href: '/holidays',
          bgcolor: 'neutral.300',
        },
        {
          label: 'Photos',
          href: '/photos',
          bgcolor: 'primary.300',
        },
      ]
    })
  }

  }, []);
  const [menus, setMenus] = React.useState(Menus);
  const [browseMenu, setBrowseMenu] = React.useState(true);
  const [configMenu, setConfigMenu] = React.useState(false);

  const [listItemDecorator, setListItemDecorator] = React.useState({
    Feed: {
      color: 'primary',
    },
    NewPost: {
      color: 'neutral.500',
    },
  });

  const navigate = useNavigate();

  return (
    <List size="sm" sx={{ '--List-item-radius': '8px' }}>
      <ListItem nested>
        <ListSubheader width='100%'>
          Browse
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px', ml: 'auto' }}
            onClick={(e) => {
              e.preventDefault();
              if (!browseMenu) {
                setBrowseMenu(true);
              } else {
                setBrowseMenu(false);
              }
            }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' }
          }}
        >
          {browseMenu ? menus.Browse.map((item) => (
            <ListItem>
              <ListItemButton
                onClick={() => navigate(item.href)}
              >
                <ListItemDecorator sx={listItemDecorator.Feed}>
                  {item.icon}
                </ListItemDecorator>
                <ListItemContent>{item.label}</ListItemContent>
              </ListItemButton>
            </ListItem>
          )) : null}

        </List>
      </ListItem>
      {sessionStorage.getItem('user') &&
      <ListItem nested sx={{ mt: 2 }}>
        <ListSubheader>
          config
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px', ml: 'auto' }}
            onClick={(e) => {
              e.preventDefault();
              if (!configMenu) {
                setConfigMenu(true);
              } else {
                setConfigMenu(false);
              }
            }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-tags"
          size="sm"
          sx={{
            '--List-decorator-size': '32px',
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          {configMenu &&
            <ListItem>
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <ListItemDecorator>
                  <LogoutIcon fontSize="small" color="primary" />
                </ListItemDecorator>
                <ListItemContent>Logout</ListItemContent>
              </ListItemButton>
            </ListItem>}
        </List>
      </ListItem>}
    </List>
  );
}
