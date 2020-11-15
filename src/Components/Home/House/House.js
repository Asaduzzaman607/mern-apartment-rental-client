import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import "./House.scss";
import image from "../../../apart-mental-resources/images/Rectangle 405.png";
import { Bathtub, LocalHotel, LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import fakeData from '../../../FakeData/FakeData';
import SingleHouse from '../SingleHouse/SingleHouse';




const House = () => {

    const [houses, setHouses] = useState(fakeData);
    
    return (
        <Box className="root">
            <Container>
                <Box className="home-top">
                    <h5>House Rent</h5>
                    <h2>Discover the latest Rent available today</h2>
                </Box>
                <Grid container spacing={5}>
                    {
                        houses.map((house, index) => <SingleHouse house={house} key={index}></SingleHouse>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default House;