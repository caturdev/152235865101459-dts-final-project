import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ItemEventAttractions = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer', bgcolor: '#222831' }}
            onClick={() => navigate(`/event/data?reff=${data.id}`)}
        >
            <CardMedia
                component="img"
                height="150"
                image={data.images[2]['url']}
                alt="green iguana"
            />
            <CardContent>
                <Box>
                    <Typography variant="body1" noWrap textAlign="center"> {data.name} </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ItemEventAttractions;