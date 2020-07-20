import React, { useState } from 'react';
import './Head.css';
import AutoCompleteText from '../AutoCompleteText';
import res from '../res.json'

function Head() {
    const [isHidden, setIsHidden] = useState(true);
    const mainIconimageSrc = require("../image/ic_apartments.png");
    return (
        <>
            <div className="Head">
                <h1>
                    APART.GG
                </h1>

                <img className="MainIcon" src={mainIconimageSrc} alt="apart.gg"></img>
                <AutoCompleteText items={res} test={setIsHidden}/>
            </div>
            <div className="HeadAutoCompleteItem" hidden={isHidden} >
                asdadad
            </div>
        </>
    )
}

export default Head;