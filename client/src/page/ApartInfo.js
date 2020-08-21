import React from 'react';
import Head from '../ui/Head';
import TopNav from '../ui/TopNav';
import Footer from '../ui/Footer';
import ApartRank from '../ui/ApartRank';

function ApartInfo(props) {
    return (
        <>
            <Head isHome={false}/>
            <TopNav />
            <ApartRank apart={props.location.apart}/>
            <Footer/>
        </>
    )
}

export default ApartInfo;