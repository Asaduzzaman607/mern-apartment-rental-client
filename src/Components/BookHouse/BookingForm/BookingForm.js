import { Box, Paper, TextField } from '@material-ui/core';
import React from 'react';
import "./BookingForm.scss";



const BookingForm = () => {
    return (
        <>
            <Box className="form">
                <Paper>
                    <form>
                        <TextField
                            fullWidth
                            id="name"
                            label="Full Name"
                            helperText=""
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="phone"
                            label="Phone No"
                            helperText=""
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            helperText=""
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="message"
                            label="Message"
                            multiline
                            rows={6}
                            helperText=""
                            variant="outlined"
                        />
                        <input className="submit" type="submit" value="Request Booking"/>
                    </form>
                </Paper>
            </Box>
        </>
    );
};

export default BookingForm;