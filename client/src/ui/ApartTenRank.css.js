import styled from "styled-components";
import {colorSet} from "../common/Color.js";

export const Wrapper = styled.div`
    background-color: ${colorSet.bodyBackground};
    top: 0;
    width: 100%;
    position: relative;

    & > div.ApartTenRank{
        font-weight : bold;
        font-size : 17px;
        padding-top: 10px;
        margin-left: 0.5em;
    }

    & > ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    & > ul li{
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        align-items: center; 
        justify-content: center;
    }

    & > ul > div{
        display : contents;
    }

    & > ul > div > li > a {
        display : contents;
        cursor: default;
        text-decoration: none;
        color: black;
    }

    & > ul > div > li > a > div.ApartRank{
        flex: 1;
        color: rgb(24, 179, 45);
        font-size: large;
    }

    & > ul > div > li > a > div.ApartRank{
        flex: 1;
        color: rgb(24, 179, 45);
        font-size: large;
    }

    & > ul > div > li > a > div.Address{
        flex: 8;
        font-size: 13px;
    }

    & > ul > div > li > a > div.Price{
        font-size : 14px;
        text-align: right;
        flex: 2;
    }

    & > ul hr{
        width: 90%;
        height:1px;
        border-width:0;
        color:rgb(228, 228, 228);
        background-color:rgb(228, 228, 228);
    }
`;