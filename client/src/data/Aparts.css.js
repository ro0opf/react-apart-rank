import styled from "styled-components";
import {colorSet} from "../common/Color";

export const Wrapper = styled.div`
    display : contents;

    & .HeadAutoCompleteItem{
        background-color: ${colorSet.bodyBackground};
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
    
    & .HeadAutoCompleteItem li a{
        text-decoration : none;
        color : inherit;
    }

    & .HeadAutoCompleteItem li a span{
        padding-left : 10px;
    }

    & .HeadAutoCompleteItem ul.Items {
        height: 100%;
        padding: 0;
        margin: 0;
        overflow: scroll;
        overflow-x: hidden;
    }
`;

