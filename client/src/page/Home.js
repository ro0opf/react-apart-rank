import React from 'react';
import Head from '../ui/Head';
import TopNav from '../ui/TopNav';
import ApartTenRank from '../ui/ApartTenRank';
import Footer from '../ui/Footer';

function Home() {
    return (
        <>
            <Head isHome={true}/>
            <TopNav />
            <ApartTenRank />
            <Footer />
        </>
    )
}

export default Home;