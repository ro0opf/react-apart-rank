import React from 'react';
import { Wrapper } from './ApartRank.css.js';

function ApartRank(props) {
    return (
        <>
            <Wrapper>
                <div className="Apart">
                    <span className="Small">
                        전체 가격 랭킹 <span className="Blue">2,735,342</span>위 (상위 52%)
                    </span>
                    <span className="Big">
                        {props.apart.name}
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