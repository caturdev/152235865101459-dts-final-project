import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSnackbar } from "notistack";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../assets/img/logo-event-yuk.png';

const Header = ({ logoLink }) => {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        isLoggedIn: null,
        name: null,
        img: null,
    });

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser((s) => ({
                    ...s,
                    isLoggedIn: true,
                    name: user.displayName,
                    img: user.photoURL,
                }));
            }
        });
    }, []);

    const onSignOut = async () => {
        try {
            await signOut(getAuth());
            enqueueSnackbar('Selamat tinggal', { variant: 'success' });
            navigate('/');
        } catch (error) {
            console.log('error : ', error);
        }
    }

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box flexGrow="1" display="flex" alignItems="center">
                        <Box mr={1}>
                            <img src={logo} alt="logo" style={{ maxHeight: 40 }} />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                textDecoration: "none",
                            }}
                        >
                            Event YUK!
                        </Typography>
                    </Box>
                    {user.isLoggedIn ?
                        <Fragment>
                            <Box mr={2}>
                                <Button onClick={() => navigate('/')}>dashboard</Button>
                            </Box>
                            <Box mr={2}>
                                <Button onClick={() => navigate('/about')}>bookmark</Button>
                            </Box>
                        </Fragment>
                        :
                        <Fragment>
                            <Box mr={2}>
                                <Button onClick={() => navigate('/')}>beranda</Button>
                            </Box>
                            <Box mr={2}>
                                <Button onClick={() => navigate('/about')}>tentang</Button>
                            </Box>
                        </Fragment>
                    }
                    {user.isLoggedIn ?
                        <Box>
                            <Button variant="contained" color="error" onClick={onSignOut}>logout</Button>
                        </Box>
                        :
                        <Box>
                            <Button variant="outlined" onClick={() => navigate('/login')}>login</Button>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;