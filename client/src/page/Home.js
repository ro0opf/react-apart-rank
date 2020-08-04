import React from 'react';
import Head from '../ui/Head';
import TopNav from '../ui/TopNav';
import Body from '../ui/Body';
import Footer from '../ui/Footer';

function Home() {
    return (
        <>
            <Head isHome={true}/>
            <TopNav />
            <Body />
            <Footer />
        </>
    )
}

export default Home;