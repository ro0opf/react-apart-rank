import React, { useState } from 'react';
import './Head.css';
import AutoCompleteText from '../AutoCompleteText';
import Aparts from '../data/Aparts';

function Head() {
    const mainIconimageSrc = require("../image/ic_apartments.png");
    const [keyword, setKeyword] = useState("");
    const [clickedApart, setClickedApart] = useState("");

    return (
        <>
            <div className="Head">
                <h1>
                    APART.GG
                </h1>

                <img className="MainIcon" src={mainIconimageSrc} alt="apart.gg"></img>
                <AutoCompleteText setKeyword={setKeyword} clickedApart={clickedApart} />
            </div>
            <Aparts keyword={keyword} setClickedApart={setClickedApart}/>
        </>
    )
}

export default Head;