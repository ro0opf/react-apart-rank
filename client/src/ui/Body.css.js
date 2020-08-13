import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #f3f3f3;
    top: 0;
    margin: 0 auto 0 auto;
    width: 100%;
    position: relative;

    & > h3{
        padding-top: 10px;
        margin-top: 0;
        margin-bottom: 0;
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

    & > ul > div > li > a > div.ApartAddress{
        flex: 8;
        font-size: 1em;
    }

    & > ul > div > li > a > div.ApartInfo{
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





