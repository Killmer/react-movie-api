import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import { GlobalStyle } from './styles/GlobalStyle';
import MovieThumb from './elements/MovieThumb';

const App = () => (
    <>
        <Header />
        <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />   
        </Router>
        <GlobalStyle />
    </>
)

export default App;
