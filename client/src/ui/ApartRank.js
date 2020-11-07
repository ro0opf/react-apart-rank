import React from 'react';
import { Wrapper } from './ApartRank.css.js';
import { useLocation } from "react-router-dom";

function ApartRank(props) {
    let location = useLocation();

    return (
        <>
            <Wrapper>
                <div>
                    {props.title}
                </div>
                <div className="Rank">
                    <div>
                        <div className="All">
                            전체 평당 가격 1등
                        </div>
                        <div className="Img">
                            <img className="All" src={require("../image/unranked.png")} alt="unranked" />
                        </div>
                        <div className="AllRank">
                            Unranked
                        </div>
                    </div>
                    <div>
                        <div className="Part">
                            {location.state.name}
                        </div>
                        <div className="Img">
                            <img className="Part" src={require("../image/unranked.png")} alt="unranked" />
                        </div>
                        <div className="PartRank">
                            Unranked
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default ApartRank;