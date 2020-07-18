import React, { useState } from 'react';
import './Head.css';
import AutoCompleteText from '../AutoCompleteText';
import res from '../res.json'

function Head() {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <>
            <div className="Head">
                <h1>
                    APART.GG
                </h1>
                <AutoCompleteText items={res} test={setIsHidden}/>
            </div>
            <div className="HeadAutoCompleteItem" hidden={isHidden} >
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

export default Head;