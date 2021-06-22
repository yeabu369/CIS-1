import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ShareIcon from '@material-ui/icons/Share';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
  
    const Likes = () => {
      if (movie.likes.length > 0) {
        return movie.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><FavoriteIcon/>&nbsp;{movie.likes.length}</>
          ) : (
            <><FavoriteOutlinedIcon/>&nbsp;{movie.likes.length}</>
          );
      }
  
      return <><FavoriteOutlinedIcon/>&nbsp;</>;
    };

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={movie.poster} title={movie.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                    </Typography>
                </div>
                <Typography variant="body2" color="textPrimary" component="h2" gutterBottom>
                    {movie.genres.map((tag) => `#${tag}   `)}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" gutterTop>
                    { movie.overview.length > 100 ? `${movie.overview.substring(0, 100)} ...` : movie.overview }
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton>
                    <Likes />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default MovieCard;