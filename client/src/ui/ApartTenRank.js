import React from 'react';
import { Wrapper } from './ApartTenRank.css.js';
import { Link } from 'react-router-dom';


const apartList = [
    {
        "address1": "충청남도", "address2": "당진시", "address3": "신평면", "address4": "거산리",
        "apartName": "풍림아이원", "area": "84.9768", "price": "2530000000"
    },
    {
        "address1": "광주광역시", "address2": "북구", "address3": "운암동",
        "apartName": "우미1", "area": "59.97", "price": "5500000000"
    },
    {
        "address1": "서울특별시", "address2": "북구", "address3": "운암동",
        "apartName": "연안아파트", "area": "101.85", "price": "4100000000"
    },
    {
        "address1": "경기도", "address2": "남양주시", "address3": "다산동",
        "apartName": "다산한양수자인리버팰리스", "area": "150.97", "price": "52500000000"
    },
    {
        "address1": "서울특별시", "address2": "북구", "address3": "운암동",
        "apartName": "더샵 파크시티", "area": "82.97", "price": "5500000000"
    },
    {
        "address1": "인천광역시", "address2": "북구", "address3": "운암동",
        "apartName": "앤터팰리스1차", "area": "58.97", "price": "5500000000"
    },
    {
        "address1": "서울특별시", "address2": "북구", "address3": "운암동",
        "apartName": "미도2차아트빌라", "area": "55.97", "price": "5500000000"
    },
    {
        "address1": "서울특별시", "address2": "북구", "address3": "운암동",
        "apartName": "우암센스뷰", "area": "52.97", "price": "5500000000"
    },
    {
        "address1": "서울특별시", "address2": "북구", "address3": "운암동",
        "apartName": "DMC마포청구아파트", "area": "66.97", "price": "5500000000"
    },
    {
        "address1": "전라북도", "address2": "군산시", "address3": "나운동",
        "apartName": "명성그린맨션", "area": "77.97", "price": "12400000000"
    }
]

function apartClicked(value) {
    console.log(value);
}

function renderApartRank() {
    
    function parseEquillibrium(area) {
        const equillibrium = parseFloat(area) / 3.3;
        return equillibrium.toFixed(2) + "평";
    }

    function parsePrice(price) {
        return parseInt(price) / 100000000 + "억";
    }

    return (
        <ul className="ApartRank">
            <hr />
            {apartList.map((apart, index) =>
                <div className="fApartRank" key={index}>
                    <li onClick={() => apartClicked(apart)}>
                        <Link to={
                            {
                                pathname: `/apartInfo/` + index,
                                myCustomProps: apart
                            }}>
                            <div className="ApartRank">
                                {index + 1}
                            </div>
                            <div className="ApartAddress">
                                {apart.apartName} ({parseEquillibrium(apart.area)})<br />
                                <small>
                                    {apart.address1}
                                </small>
                            </div>
                            <div className="ApartInfo">
                                {parsePrice(apart.price)}
                            </div>
                        </Link>
                    </li>
                    <hr />
                </div>
            )}
        </ul>
    );
}


function ApartTenRank() {
    return (
        <>
            <Wrapper>
                <h3>
                    인기 검색 아파트 순위
                </h3>
                {renderApartRank()}
            </Wrapper>
        </>
    )
}

export default ApartTenRank;