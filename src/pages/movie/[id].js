import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { BASE_URL } from '../../utils/constants';
import MovieDetails from '../../components/MovieDetails';
import { initializeStore } from '../../store';

const MovieDetailsPage = ({ details, error }) => (
  <Layout placeholder={false}>
    <Head>
      <title>
        {details?.Title}
        {' '}
        (
        {details?.Year}
        )
      </title>
    </Head>
    {!_.isEmpty(details) ? <MovieDetails details={details} /> : <Header>{error}</Header>}
  </Layout>
);

export async function getServerSideProps({ params }) {
  const reduxStore = initializeStore();
  let error; let
    data;
  try {
    const response = await axios.get(BASE_URL, { params: { i: params.id } });
    data = response.data;
  } catch (e) {
    error = e.message;
  }
  return {
    props: {
      details: data,
      initialReduxState: reduxStore.getState(),
      error: error ?? null,
    },
  };
}

export default MovieDetailsPage;
