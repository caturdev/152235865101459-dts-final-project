import SearchIcon from "@mui/icons-material/Search";
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Card, CardContent, Divider, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body";
import EventCarousel from "../../components/carousel/EventCarousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <Body>
                <Header />
                <Box className="eventBackground">
                    <Main>
                        <Section>
                            <Box
                                mb={5}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <Paper
                                    component="form"
                                    sx={{
                                        p: '2px 4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        bgcolor: '#222831',
                                    }}
                                >
                                    <InputBase
                                        sx={{
                                            ml: 1,
                                            flex: 1,
                                            color: 'whitesmoke',
                                        }}
                                        placeholder="Cari Event Kamu"
                                        inputProps={{ 'aria-label': 'cari event kamu' }}
                                    />
                                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon color="primary" />
                                    </IconButton>
                                    <Divider
                                        orientation="vertical"
                                        sx={{
                                            height: 28,
                                            m: 0.5,
                                            borderColor: 'GrayText'
                                        }}
                                    />
                                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                        <StarIcon color="primary" />
                                    </IconButton>
                                </Paper>
                            </Box>
                            <Box mb={5}>
                                <EventCarousel />
                            </Box>
                        </Section>
                    </Main>
                </Box>
                <Footer />
            </Body>
        </Fragment >
    )
}

export default Dashboard;