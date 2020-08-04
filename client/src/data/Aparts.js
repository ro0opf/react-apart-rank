import React, { useEffect } from 'react';
import axios from 'axios';
import { useAsync } from '../util/useAsync';
import { Link } from 'react-router-dom';
import { Wrapper } from './Aparts.css'


let count = 1;
async function getAsyncAparts(keyword) {
    const response = await axios.get('http://116.123.85.116:9999/apart', {
        params: {
            apart_name: keyword
        },
    });
    
    return response.data;
}

function test(keyword){
    const response = axios.get('http://116.123.85.116:9999/apart', {
        params: {
            apart_name: keyword
        },
    });
    
    console.log("LOG >> " + keyword);
    count++;

    console.log(response);
    return response.data;
}

function suggestionSelected(value) {
    console.log("asfesef");
}

function Aparts(props) {
    const keyword = props.keyword;
    // const [state, refetch] = useAsync(() => getAsyncAparts(props.keyword), [props.keyword]);
    // const { loading, data: aparts, error } = state;

    // test(keyword);
    console.log("keyword is " + keyword);
    useEffect(()=>{
        const response = axios.get('http://116.123.85.116:9999/apart', {
            params: {
                apart_name: keyword
            },
        }).then((res)=>{
            console.log(keyword);
            console.log(res);
        }).catch((res)=>{
            console.log(keyword);
            console.log(res);
        });

    }, [keyword])
    return null;
    // if (keyword.length < 2) {
    //     return null;
    // }

    // if (loading) {
    //     return <div>로딩중...</div>;
    // }

    // if (error) {
    //     return <div>에러!!!</div>;
    // }

    // if (!aparts) {
    //     return null;
    // }

    // return (
    //     <Wrapper>
    //         <div className="HeadAutoCompleteItem">
    //             <ul className="Items">
    //                 {aparts.map((apart, index) =>
    //                     <li key={index} onClick={() => suggestionSelected(apart)}>
    //                         <Link to="/apartInfo">
    //                             {apart.name}
    //                             <small>
    //                                 <span>
    //                                     {apart.address_1}
    //                                 </span>
    //                             </small>
    //                         </Link>
    //                     </li>
    //                 )}
    //             </ul>
    //         </div>
    //     </Wrapper>
    // )
}

export default Aparts;