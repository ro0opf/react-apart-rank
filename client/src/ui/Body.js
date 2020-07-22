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
                "apartName": "풍림아이원", "area": "84.9768",
                "price" : "2530000000"
            },
            { "address1": "광주광역시", "address2": "북구", "address3": "운암동", "apartName": "우미1", "area": "59.97", "price" : "5500000000" }
        ]
        
        function parseEquillibrium(area){
            const equillibrium = parseFloat(area) / 3.3; 
            return equillibrium.toFixed(2) + "평";
        }

        function parsePrice(price){
            return parseInt(price) / 100000000 + "억";
        }

        return (
            <ul className="ApartRank">
                <hr />
                {apartList.map((apart, index) =>
                    <>
                        <li onClick={() => apartClicked(apart)}>
                            <div className="ApartRank">
                                {index + 1}
                            </div>
                            <div className="ApartAddress">
                                {apart.apartName} ({parseEquillibrium(apart.area)})<br/>
                                <small>
                                    {apart.address1}
                                </small>
                            </div>
                            <div className="ApartInfo"> 
                                {parsePrice(apart.price)}
                            </div>
                        </li>
                        <hr />
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