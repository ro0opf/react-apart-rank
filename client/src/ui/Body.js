import React from 'react';
import './Body.css';

function Body() {
    function apartClicked(value) {
        console.log(value);
    }


    function renderApartRank() {
        const apartList = [
            {
                "address1": "충청남도", "address2": "당진시",
                "address3": "신평면", "address4": "거산리",
                "apartName": "풍림아이원", "apartEquilibrium": "84.9768"
            },
            { "address1": "광주광역시", "address2": "북구", "address3": "운암동", "apartName": "우미1", "apartEquilibrium": "59.97" }
        ]

        return (
            <ul className="ApartRank">
                <hr/>
                {apartList.map((apart, index) =>
                    <>
                        <li onClick={() => apartClicked(apart)}>
                            {index + 1} {apart.apartName}
                            <small>
                                <span>
                                    {apart.address1}
                                </span>
                            </small>
                        </li>
                        <hr/>
                    </>
                )}
            </ul>
        );
    }

    return (
        <>
            <div className="Body">
                <h3>
                    인기 검색 아파트 순위
                </h3>
                {renderApartRank()}
            </div>
        </>
    )
}

export default Body;