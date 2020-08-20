import styled from "styled-components";

export const Wrapper = styled.div`
    display : contents;

    & .AutoCompleteText{
        width: 95%;
        font-family: Arial, Helvetica, sans-serif;
        font-size:14px; 
        margin:0 auto;
        padding-top:10px;
        padding-bottom: 10px;
    }
    
    & .AutoCompleteText input{
        width: 100%;
        border: 0px solid #1f1f1f;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: rgba(0,0,0, 0.73);
        border-radius: 5px;
        padding: 10px 20px;
        box-sizing: border-box;
        outline: none;
    }
`;




