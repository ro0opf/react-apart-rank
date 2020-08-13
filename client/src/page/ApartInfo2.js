import React from 'react';
import Head from '../ui/Head';
import TopNav from '../ui/TopNav';
import Footer from '../ui/Footer';

function ApartInfo2(props) {
    return (
        <>
            <Head isHome={false}/>
            <h1>
                {props.location.myCustomProps.apartName}
            </h1>
            <TopNav />
        </>
    )
}

export default ApartInfo2;