import { Box, Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { Fragment, useEffect } from "react";
import Body from "../components/Body";
import EventCarousel from "../components/carousel/EventCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";

const Home = () => {

    useEffect(() => {

        return () => {
        }
    }, []);

    return (
        <Fragment>
            <Body>
                <Header />
                <Main>
                    <Section>
                        <Box my={5}>
                            <EventCarousel />
                        </Box>
                        <Box my={5}>
                            <Card sx={{ bgcolor: '#222831' }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" component="h2" align="center" gutterBottom> Selamat Datang Di Event YUK! </Typography>
                                    <Typography variant="body1" align="center" gutterBottom> Temukan informasi lengkap soal event terkini, dan <strong>langsung checkout tiketnya!</strong> </Typography>
                                    <Box mt={5} mb={3}>
                                        <Button variant="contained" color="error" sx={{ minWidth: 180 }}> login sekarang </Button>
                                        <Divider sx={{ my: 2, color: 'whitesmoke' }}> Bulum Punya Akun? </Divider>
                                        <Button variant="contained" color="info" sx={{ minWidth: 180 }}> registrasi </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    );
}

export default Home;