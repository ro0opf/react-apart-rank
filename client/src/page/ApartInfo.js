import React from 'react';
import Head from '../ui/Head';
import TopNav from '../ui/TopNav';
import Footer from '../ui/Footer';

function ApartInfo(props) {
    return (
        <>
            <Head isHome={false}/>
            <TopNav />
            <h1>
                {props.location.myCustomProps.apartName}
            </h1>

            <Footer/>
        </>
    )
}

export default ApartInfo;