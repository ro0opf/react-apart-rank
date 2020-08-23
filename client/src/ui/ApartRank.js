import React from 'react';
import { Wrapper } from './ApartRank.css.js';
import { useLocation } from "react-router-dom";

function ApartRank() {
    let location = useLocation();

    return (
        <>
            <Wrapper>
                <div className="Apart">
                    <span className="Small">
                        전체 가격 랭킹 <span className="Blue">2,735,342</span>위 (상위 52%)
                    </span>
                    <span className="Big">
                        {location.state.name}
                    </span>
                </div>

                <div className="Rank">
                    <div>
                        <div className="All">
                            전국
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
                            {location.state.address_1}
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