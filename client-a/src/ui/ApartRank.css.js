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

    & > div.Rank{
        border-top : 1px solid #cdd2d2;
        border-bottom : 1px solid #cdd2d2;
        background-color : #ebeef1;
        height : 150px;
        display : flex;
        width : 100%;
    }

    & > div.Rank > div{
        flex : 1;
        border-left : 1px solid #cdd2d2;
        display: flex;
        flex-direction : column;
        justify-content : center;
    }

    & > div.Rank > div > div{
        text-align : center;
        margin : 0 auto;
    }

    & > div.Rank > div > div.All{
        font-size : 13px;
    }

    & > div.Rank > div > div.Part{
        font-size : 13px;
    }

    & > div.Rank > div > div.AllRank{
        font-size : 13px;
    }

    & > div.Rank > div > div.PartRank{
        font-size : 13px;
    }

    & > div.Rank > div > div.Img{
        display : contents;
    }

    & > div.Rank > div > div > img{
        margin : 0 auto;
        width: 60%;
        height : 60%;
    }
`;