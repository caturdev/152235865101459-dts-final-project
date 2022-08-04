import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material"
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Body from "../../components/Body";
import EventAttractions from "../../components/carousel/EventAttractions";
import EventCarousel from "../../components/carousel/EventCarousel";
import PriceRange from "../../components/carousel/PriceRange";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";

const DetailEvent = () => {

	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await axios.get(process.env.REACT_APP_ENDPOINT + 'events/' + searchParams.get('reff') + '?apikey=' + process.env.REACT_APP_TOKEN + '');
			setData(result.data);
			console.log(result.data);
		})();
	}, []);

	return (
		<Fragment>
			<Body>
				<Header />
				<Box className="eventBackground" sx={{ minHeight: '95vh' }}>
					<Main>
						<Section>
							{data.id ?
								<Grid container spacing={2}>
									<Grid item xs={12} lg={4}>
										<Card sx={{ bgcolor: '#222831' }}>
											<CardMedia
												component="img"
												height="250"
												image={data.images[0] ? data.images[0].url : ''}
												alt="artist"
											/>
										</Card>
									</Grid>
									<Grid item xs={12} lg={8}>
										<Card sx={{ bgcolor: '#222831' }}>
											<CardContent>
												<Typography variant="caption">{data.dates.status.code}</Typography>
												<Typography variant="h5" component="h2" gutterBottom>{data.name}</Typography>
												<Typography variant="body1" gutterBottom>{data.dates.start.localDate} - {data.dates.start.localTime} ({data.dates.timezone})</Typography>
												<Divider sx={{ borderColor: 'GrayText', my: 2 }} />
												<Typography> Dimeriahkan Oleh </Typography>
												<Box my={2}>
													<EventAttractions data={data._embedded.attractions} />
												</Box>
											</CardContent>
										</Card>
									</Grid>
								</Grid>
								: ''}
						</Section>
					</Main>
				</Box>
				<Footer />
			</Body>
		</Fragment >
	)
}

export default DetailEvent;