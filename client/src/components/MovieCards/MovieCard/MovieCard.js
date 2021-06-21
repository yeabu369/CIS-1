import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import useStyles from './styles';

const Product = ({ movie }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={movie.media.source} title={movie.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Br {movie.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: movie.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;