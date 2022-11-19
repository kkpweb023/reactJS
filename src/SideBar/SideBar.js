import { Divider, Drawer, IconButton, styled } from '@mui/material';
import React from 'react'
import ListBar from './ListBar/ListBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const SideBar = ({ open, setOpen }) => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }));


    return (
        <div>

            <Drawer
                sx={{
                    width: 220,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        bgcolor: "rgba(0,139,139,1)",
                        color:"whitesmoke",
                        
                    },
                    
                }}
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >

                <DrawerHeader>
                    <IconButton onClick={()=>setOpen(false)}>
                        <ChevronLeftIcon sx={{color:"whitesmoke"}}/>
                    </IconButton>
                </DrawerHeader>
                
                <Divider sx={{bgcolor:"whitesmoke"}}/>

                <ListBar open={open} setOpen={setOpen} />
            </Drawer>

        </div>
    )
}

export default SideBar;