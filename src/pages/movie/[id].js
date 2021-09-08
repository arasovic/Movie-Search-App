import React from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";
import _ from "lodash";
import MovieDetails from "../../components/MovieDetails";
import Head from "next/head";
import {initializeStore} from "../../store";
import {Header} from "semantic-ui-react";

const MovieDetailsPage = ({details, error}) => {
    return (
        <Layout placeholder={false}>
            <Head>
                <title>
                    {details?.Title} ({details?.Year})
                </title>
            </Head>
            {!_.isEmpty(details) ? <MovieDetails details={details}/> : <Header>{error}</Header>}
        </Layout>
    );
};

export async function getServerSideProps({params}) {
    const reduxStore = initializeStore()
    let error, data
    try {
        const response = await axios.get(BASE_URL, {params: {i: params.id}})
        data = response.data
    } catch (e) {
        error = e.message
    }
    return {
        props: {
            details: data,
            initialReduxState: reduxStore.getState(),
            error: error ?? null
        }
    }
}

export default MovieDetailsPage;