import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';



export default function ListBar({ setOpen }) {
  return (
    <>

      <List>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/'} className={"btn"} onClick={() => setOpen(false)} >
            <ListItemIcon>
              <InboxIcon sx={{ color: "whitesmoke" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ bgcolor: "white", width: "170px" }} />

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/weather'} className={"btn"} onClick={() => setOpen(false)}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "whitesmoke" }} />
            </ListItemIcon>
            <ListItemText primary="WeatherAPP" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ bgcolor: "white", width: "170px" }} />

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/tablePagi'} className={"btn"} onClick={() => setOpen(false)}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "whitesmoke" }} />
            </ListItemIcon>
            <ListItemText primary="Table Paginate" />
          </ListItemButton>
        </ListItem>


        <Divider sx={{ bgcolor: "white", width: "170px" }} />

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/crud'} className={"btn"} onClick={() => setOpen(false)}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "whitesmoke" }} />
            </ListItemIcon>
            <ListItemText primary="Crud" />
          </ListItemButton>
        </ListItem>

      </List>

    </>

  );
}