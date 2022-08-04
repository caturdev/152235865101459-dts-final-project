import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

import logo from '../assets/img/logo-event-yuk-name.png';

const Footer = () => {
    return (
        <Fragment>
            <Box p={10} sx={{ bgcolor: '#222831' }}>
                <Container>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} md={4} textAlign="center">
                                <img src={logo} alt="logo" style={{ maxWidth: 100 }} />
                            </Grid>
                            <Grid item xs={12} md={4} textAlign="center">
                                <Button> Tentang nonton YUK! </Button>
                            </Grid>
                            <Grid item xs={12} md={4} textAlign="center">
                                <Button> Author </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider sx={{ my: 5 }} />
                    <Box>
                        <Typography align="center" variant="body1" color="GrayText"> REA2 PRO DTS 2022 - NUR WAHYU CATUR WICAKSONO - 152235865101-459 </Typography>
                        <Typography align="center" variant="body2" color="GrayText"> &bull; &bull; &bull; </Typography>
                        <Typography align="center" variant="body2" color="GrayText"> FINAL PROJECT </Typography>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    );
}

export default Footer;