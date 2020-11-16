import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import "./BookingMain.scss";
import image from "../../../apart-mental-resources/images/Rectangle 405.png";






const BookingMain = () => {
    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={8}>
                        <Grid container spacing={3}>
                            <Grid item md={12}>
                                <Box className="main-top">
                                    <img src={image} alt=""/>
                                </Box>
                            </Grid>
                            <Grid item md={12}>
                                <Grid container spacing={3}>
                                    <Grid item md={3}>
                                        <img src={image} alt=""/>
                                    </Grid>
                                    <Grid item md={3}>
                                        <img src={image} alt=""/>
                                    </Grid>
                                    <Grid item md={3}>
                                        <img src={image} alt=""/>
                                    </Grid>
                                    <Grid item md={3}>
                                        <img src={image} alt=""/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <BookingForm></BookingForm>
                    </Grid>
                    <Grid item md={8}>
                        <Box className="house-info">
                            <Box className="house-space" display="flex" justifyContent="space-between">
                                <h1>Family Apartment Three</h1>
                                <span>$194</span>
                            </Box>
                            <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        </Box>

                        <Box className="house-info">
                            <Box className="house-price">
                                <h1>Price Details-</h1>
                            </Box>
                            <p>Rent/Month: $550 (negotiable) <br/>
                                Service Charge : 8,000/= Tk per month, subject to change <br/>
                                Security Deposit : 3 month’s rent <br/>
                                Flat Release Policy : 3 months earlier notice required
                            </p>
                        </Box>
                        <Box className="house-info">
                            <Box className="house-price">
                                <h1>Property Details-</h1>
                            </Box>
                            <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br/>
                            Flat Size : 3000 Sq Feet. <br/>
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br/>
                            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/>
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera

                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Container> 
        </>
    );
};

export default BookingMain;