import React, { useState } from 'react';
import AutoCompleteText from './AutoCompleteText';
import Aparts from '../data/Aparts';
import { Wrapper } from './Head.css.js';
import { Link } from 'react-router-dom';

function Head(props) {
    const mainIconimageSrc = require("../image/ic_apartments.png");
    const [keyword, setKeyword] = useState("");
    const [clickedApart, setClickedApart] = useState("");

    return (
        <>
            <Wrapper isHome={props.isHome}>
                <div className="Head">
                    <h1>
                        <Link to="/">
                            APART.GG
                        </Link>
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