import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';
import "./House.scss";



import image from "../../../apart-mental-resources/images/Rectangle 405.png";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
const House = () => {

    const classes = useStyles();
    return (
        <>
            <Container>
                <Box>
                    <h4>House Rent</h4>
                </Box>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
            </Container>
        </>
    );
};

export default House;