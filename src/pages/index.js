import Layout from "../components/Layout";
import MovieCardList from "../components/MovieCardList";
import {useSelector} from "react-redux";
import Head from "next/head";
import React from "react";


export default function Home() {
    const {loading} = useSelector(state => state.search)
    return (
        <>
            <Head>
                <title>
                    Movie Search App
                </title>
            </Head>
            <Layout loading={loading} placeholder>
                <MovieCardList/>
            </Layout>
        </>
    )
}
