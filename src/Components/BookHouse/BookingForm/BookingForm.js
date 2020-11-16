import { Box, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./BookingForm.scss";



const BookingForm = () => {

    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <Box className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            inputRef={register({
                                required: "Full name is required",
                            })}
                            fullWidth
                            id="name"
                            label="Full Name"
                            margin="normal"
                            variant="outlined"
                            type="text"
                            className="input"
                            name="fullName"
                            FormHelperTextProps={{
                                
                            }}
                            helperText={errors.fullName && errors.fullName.message}
                        />

                        

                        <TextField
                            inputRef={register({
                                required: "Phone number is required",
                            })}
                            fullWidth
                            id="phone"
                            label="Phone No"
                            className="input"
                            margin="normal"
                            type="number"
                            name="phone"
                            variant="outlined"
                            FormHelperTextProps={{
                                
                            }}
                            helperText={errors.phone && errors.phone.message}
                        />
                        <TextField
                            inputRef={register({
                                required: "Email is required",
                            })}
                            fullWidth
                            id="email"
                            className="input"
                            label="Email"
                            margin="normal"
                            type="email"
                            name="email"
                            variant="outlined"
                            FormHelperTextProps={{
                                
                            }}
                            helperText={errors.email && errors.email.message}
                        />
                        <TextField
                            inputRef={register({
                                required: "Message is required",
                            })}
                            fullWidth
                            id="message"
                            label="Message"
                            className="input"
                            margin="normal"
                            type="text"
                            multiline
                            name="message"
                            rows={6}
                            variant="outlined"
                            FormHelperTextProps={{
                                
                            }}
                            helperText={errors.message && errors.message.message}
                        />
                        
                        <input className="submit" type="submit" value="Request Booking"/>
                    </form>
            </Box>
        </>
    );
};

export default BookingForm;