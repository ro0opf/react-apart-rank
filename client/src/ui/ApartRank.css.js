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
    }

    & > div.Apart > span.Small{
        font-size : small;
    }

    & > div.Apart > span.Big{
        font-size : 20px;
    }

    & > div.Apart span.Blue{
        color : blue;
    }

    & > div.Rank{
        background-color : #555555;
        height : 150px;
        display : flex;
        width : 100%;
    }

    & > div.Rank > div{
        flex : 1;
        margin : 10px;
        background-color : #123123;
    }
`;