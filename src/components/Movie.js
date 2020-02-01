import React from 'react';

import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actors from './elements/Actors';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {

  const [ movie, loading, error] = useMovieFetch(movieId);

  if(error) return <div>Something went wrong...</div>;
  if(loading || !movie.original_title) return  <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie}/>
      <MovieInfoBar />
      <Grid>
        <Actors />
      </Grid>
    </>
  )
};

export default Movie;