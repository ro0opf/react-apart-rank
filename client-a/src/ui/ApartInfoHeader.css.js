import styled from "styled-components";
import {colorSet} from "../common/Color.js";

export const Wrapper = styled.div`
    background-color: ${colorSet.bodyBackground};
    top: 0;
    margin: 0 auto 0 auto;
    width: 100%;

    & > div.Apart{
        display : flex;
        flex-direction : column;
        padding-left : 10px;
        padding-bottom : 10px;
        padding-top : 10px;
    }

    & > div.Apart > span.Small{
        font-size : 11px;
        color : #879292;
    }

    & > div.Apart > span.Big{
        font-weight : bold;
        font-size : 17px;
    }

    & > div.Apart span.Blue{
        color : blue;
    }
`;