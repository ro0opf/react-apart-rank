import styled from "styled-components";

export const Wrapper = styled.div`
    display : contents;

    & .TopNav{
        background-color: rgb(255, 255, 255);
        top: 0;
        margin: 0 auto 0 auto;
        width: 100%;
        height: 42px;
        position: relative;
        overflow-x: auto;
    }

    & .TopNav> ul{
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        list-style: none;
        margin:0 auto;
        text-align: left;
        padding: 0;
    }

    & .TopNav > ul > li{
        display: inline-block;
        margin-left: 15px;
    }

    & .TopNav > ul > li > a{
        text-decoration: none;
        font-size: 0.9em;
        color: rgb(24, 179, 45);
    }
`;