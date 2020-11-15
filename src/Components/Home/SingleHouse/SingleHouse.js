import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, } from '@material-ui/core';
import image from "../../../apart-mental-resources/images/Rectangle 405.png";
import { Bathtub, LocalHotel, LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';



const SingleHouse = (props) => {

    return (
        <>
        <Grid item md={4}>
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                    className="media"
                    image={image}
                    title="Contemplative Reptile"
                    />
                    <CardContent className="card-content">
                        <h2 className="house-name">Washington Avenue</h2>
                        <h4><LocationOn /> Nasirabad H/S, Chattogram</h4>
                        <Box display="flex" justifyContent="space-between">
                            <h5><LocalHotel /> 3 Bedrooms</h5>
                            <h5><Bathtub /> 2 Bathroom</h5>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <Box className="footer" display="flex" justifyContent="space-between">
                    <span className="price">$194</span>
                    <Link to="/home" className="details">View Details</Link>
                </Box>
            </Card>
        </Grid>
        </>
    );
};

export default SingleHouse;