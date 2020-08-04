import React, { useState } from 'react';
import AutoCompleteText from '../AutoCompleteText';
import Aparts from '../data/Aparts';
import { Wrapper } from './Head.css.js';


function Head() {
    const mainIconimageSrc = require("../image/ic_apartments.png");
    const [keyword, setKeyword] = useState("");
    const [clickedApart, setClickedApart] = useState("");

    return (
        <>
            <Wrapper>
                <div className="Head">
                    <h1>
                        APART.GG
                </h1>

                    <img className="MainIcon" src={mainIconimageSrc} alt="apart.gg"></img>
                    <AutoCompleteText setKeyword={setKeyword} clickedApart={clickedApart} />
                </div>
                <Aparts keyword={keyword} setClickedApart={setClickedApart} />
            </Wrapper>
        </>
    )
}

export default Head;