import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { likeCard, deleteCard } from '../../../actions/cards';
import useStyles from './styles';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const isAdmin = user.role === 'Admin' || false;
  
    const Likes = () => {
      if (movie.likes.length > 0) {
        return movie.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><FavoriteIcon color="secondary"/>&nbsp;{movie.likes.length}</>
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
                {isAdmin ? (<IconButton onClick={() => dispatch(deleteCard(movie.id))}>
                    <DeleteIcon />
                </IconButton>) : null}
                <IconButton onClick={() => dispatch(likeCard(movie.id))}>
                    <Likes />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default MovieCard;