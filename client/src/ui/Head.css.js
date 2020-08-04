import styled from "styled-components";
import {colorSet} from "../common/Color";

export const Wrapper = styled.div`
    & .Head {
        background-color: ${colorSet.mainColor};
        top: 0;
        margin: 0 auto 0 auto;
        width: 100%;
        height: 220px;
        position: relative;
    }

    & .Head > h1{
        padding-top: 5px;
        margin: 0 0 0 0;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-size: 1.5em;
    }
    
    & .Head > img.MainIcon{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        -moz-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }
    
    & .HeadAutoCompleteItem{
        background-color: #f3f3f3;
        top: 0;
        margin: 0 auto 0 auto;
        width: 100%;
        height: 30%;
    }
    
    
    & .HeadAutoCompleteItem ul{
        list-style-type: none;
        text-align: left;
        margin: 0;
        padding: 0;
        border-top: 1px solid grey;
    }
    
    & .HeadAutoCompleteItem ul::before{
        content:"";
    }
    
    & .HeadAutoCompleteItem li{
        padding: 10px 5px;
        cursor : pointer;
    }
    
    & .HeadAutoCompleteItem li:hover{
        text-decoration: underline;
        background-color: rgba(128,128,128, 0.20);
    }
    
    & ul.Items {
        height: 20em;
        padding: 0;
        margin: 0;
        overflow: scroll;
        overflow-x: hidden;
    }
`;

