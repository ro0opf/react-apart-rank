import styled from "styled-components";
import {colorSet} from "../common/Color";

export const Wrapper = styled.div`
    display : contents;

    & .Head {
        background-color: ${colorSet.mainColor};
        top: 0;
        margin: 0 auto 0 auto;
        width: 100%;
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
        display: ${props => (props.isHome ? `block` : `none`)};
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        height: 100px;
        margin-top : 15px;
        margin-bottom : 15px;
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

