import React from 'react';
import Head from '../ui/Head';
import TopNav from '../ui/TopNav';
import ApartTenRank from '../ui/ApartTenRank';
import Footer from '../ui/Footer';

function HomePage() {
    return (
        <>
            <Head isHome={true}/>
            <TopNav />
            <ApartTenRank />
            <Footer />
        </>
    )
}

export default HomePage;