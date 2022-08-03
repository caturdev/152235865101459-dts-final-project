import { Box, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <Box p={10} sx={{ bgcolor: '#222831' }}>
                <Container>
                    <Box>
                        <Typography align="center" variant="body1" color="GrayText"> REA2 PRO DTS 2022 - NUR WAHYU CATUR WICAKSONO - 152235865101-459 </Typography>
                        <Typography align="center" variant="body2" color="GrayText"> &bull; </Typography>
                        <Typography align="center" variant="body2" color="GrayText"> MINI PRO - PAIR 23 </Typography>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    );
}

export default Footer;