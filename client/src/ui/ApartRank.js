import React from 'react';
import { Wrapper } from './ApartRank.css.js';
import { Link } from 'react-router-dom';

function parseEquillibrium(area) {
    const equillibrium = parseFloat(area) / 3.3;
    return equillibrium.toFixed(2) + "평";
}

function parsePrice(price) {
    return parseInt(price) / 100000000 + "억";
}

function ApartRank(props) {
    return (
        <>
            <Wrapper>
                <div className="Apart">
                    <span className="Small">
                        전체 가격 랭킹 <span className="Blue">2,735,342</span>위 (상위 52%)
                    </span>
                    <span className="Big">
                        {props.apart.apartName}
                    </span>
                </div>

                <div className="Rank">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default ApartRank;