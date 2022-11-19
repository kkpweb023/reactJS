import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle'
import SideBar from '../SideBar/SideBar';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);

  

    return (
        <>
            <CssBaseline />
            <SideBar open={open} setOpen={setOpen} />
            
    
            <AppBar  top="0px" sx={{ bgcolor: "rgba(0,139,139,0.9)",position:"sticky",top:"0px"}}>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6"  component="div" sx={{ flexGrow: 0.5 }}/>
                    
                        <Button color="inherit" sx={{fontWeight:"bold"}} component={NavLink} to={'/'} className="btn">Home</Button>
                        <Button color="inherit" sx={{fontWeight:"bold"}} component={NavLink} to={'/about'} className="btn">About</Button>
                        <Button color="inherit" sx={{fontWeight:"bold"}} component={NavLink} to={'/contact'} className="btn">Contact</Button>
                        <Button color="inherit" sx={{fontWeight:"bold"}} component={NavLink} to={'/who'} className="btn">Who we are</Button>
                        
                
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }} />

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"

                        >
                            <AccountCircle />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
 
            
        </>

    );
}

export default NavBar;