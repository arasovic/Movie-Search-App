import React from 'react';
import {useSelector} from "react-redux";
import {Card, Header, Icon} from "semantic-ui-react";

import MovieCard from "./MovieCard";


const MovieCardList = () => {
    const {movies, error} = useSelector(state => state.search)
    return (<>
        {!movies?.length ?
            <Header as='h2' icon><Icon color='red' name='exclamation circle'/>{error || 'Type something on search'}</Header>
            :
            <Card.Group centered doubling>
                {movies?.map((movie, index) => <MovieCard key={index} movie={movie}/>)}
            </Card.Group>
        }
    </>);
};

export default MovieCardList;