import React from 'react';
import {Grid, Header} from "semantic-ui-react";
import Image from "next/image";
import MovieDetailsTable from "./MovieDetailsTable";


const MovieDetails = ({details}) => {
    return (
        <>
            <Grid centered stackable celled="internally">
                <Grid.Row>
                    <Grid.Column textAlign="center" width={5} verticalAlign={"middle"}>
                        <div className='detail-image'>
                            <Header>{details?.Title}</Header>
                            <Image src={details?.Poster === 'N/A' ? '/no-poster.jpg' : details?.Poster} width={514}
                                   height={800} />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={11}><MovieDetailsTable details={details}/></Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default MovieDetails;