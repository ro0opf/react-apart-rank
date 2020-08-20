import styled from "styled-components";
import {colorSet} from "../common/Color";

export const Wrapper = styled.div`
    display : contents;

    & .Head {
        background-color: ${colorSet.main};
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

    & .Head > h1 > a{
        color : inherit;
        text-decoration: none;
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
`;

