import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ItemPriceRange = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer', bgcolor: '#222831' }}
            onClick={() => navigate(`/event/data?reff=${data.id}`)}
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

export default ItemPriceRange;