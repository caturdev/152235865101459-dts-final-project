import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Divider, Rating, Typography } from "@mui/material";

const Item = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer', bgcolor: '#222831' }}
            onClick={() => navigate(`/login`)}
        >
            <CardMedia
                component="img"
                height="200"
                image={data.images[2]['url']}
                alt="green iguana"
            />
            <CardContent>
                <Box>
                    <Typography variant="body1" noWrap> {data.name} </Typography>
                    <Typography variant="caption"> {data.dates.start.localDate} - {data.dates.start.localTime} </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Item;