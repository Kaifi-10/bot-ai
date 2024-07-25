import React, { useState } from 'react'
import styles from './SideBar.module.css'
import Box from '@mui/material/Box';
import logo from '../../assets/newchat.png'
import { Button, Typography, useMediaQuery, IconButton, Drawer } from '@mui/material';
import edit from '../../assets/edit.png'
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function SideBar() {
    const isMobile = useMediaQuery('(max-width:1100px)')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const sidebarContent = (
        <Box sx={{
            width: isMobile ? '100%' : '20%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <Box className={styles.navbar}>
                <Box component='img' src={logo} alt='logo' width={45} sx={{
                    marginLeft: '10px',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    borderRadius: '10px',
                }}/>
                <Typography className={styles.newChat}>
                    New Chat
                </Typography>
                <Box component='img' src={edit} alt='logo' />
            </Box>
            <Box sx={{
                bgcolor: '#fff',
                flexGrow: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: '20px',
            }}>
                <Box sx={{
                    width: '175px',
                    height: '40px',
                    borderRadius: '10px',
                    bgcolor: '#D7C7F4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography>
                        Past Conversations
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex',  alignItems: 'flex-start' }}>
            {isMobile ? (
                <>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ m: 2 }}
                        // display="flex"
                        // justifyContent="flex-start"
                        // alignItems="flex-start"
                        
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={isDrawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        <Box sx={{ width: 250 }} role="presentation">
                            <Button
                                endIcon={<CancelRoundedIcon />}
                                sx={{
                                    width: 1,
                                    justifyContent: "flex-end",
                                    color: "#D7C7F4",
                                    "&:hover": {
                                        color: "#9785BA",
                                    },
                                }}
                                onClick={toggleDrawer(false)}
                            >
                                Close
                            </Button>
                            {sidebarContent}
                        </Box>
                    </Drawer>
                </>
            ) : (
                sidebarContent
            )}
        </Box>
    )
}

export default SideBar