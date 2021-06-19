import React from 'react';
import Grid from '@material-ui/core/Grid';

import MovieCard from './MovieCard/MovieCard';
import useStyles from './styles';

const MovieCards = ({ movies }) => {
    const classes = useStyles();
    
    if (!movies.length) return <p>Loading...</p>

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {movies.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default MovieCards;