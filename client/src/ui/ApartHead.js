import React, { useState } from 'react';
import './ApartHead.css';
import AutoCompleteText from '../AutoCompleteText';
import res from '../res.json'

function ApartHead() {

    return (
        <>
            <div className="ApartHead">
                <h1>
                    APART.GG
                </h1>
                <AutoCompleteText items={res}/>
            </div>
            <div className="ApartHead1">
                asdadad
            </div>
            <div className="ApartHead1">
                asdadad
            </div>
            <div className="ApartHead1">
                asdadad
            </div>
        </>
    )
}

export default ApartHead;