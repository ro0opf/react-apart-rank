import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from '../util/useAsync';
import { Link } from 'react-router-dom';
import { Wrapper } from './Aparts.css'
import { env } from '../common/Env.js';

let finalKeyword;
let isStopRender = false;

async function getAsyncAparts(keyword) {
    const response = await axios.get(env.serverAddress + '/apart', {
        params: {
            apart_name: keyword
        },
    });
    return response.data;
}

function suggestionSelected(value) {
    console.log("asfesef");
}

function Aparts(props) {
    const keyword = props.keyword;
    finalKeyword = keyword;
    const [render, setRender] = useState(null);

    useEffect(()=>{
        if(keyword.length > 1){
            getAsyncAparts(keyword).then((res)=>{
                if(keyword === finalKeyword){
                    isStopRender = true;
                }
                if(isStopRender){
                    setRender(
                        <Wrapper>
                        <div className="HeadAutoCompleteItem">
                            <ul className="Items">
                                {res.map((apart, index) =>
                                    <li key={index} onClick={() => suggestionSelected(apart)}>
                                        <Link to="/apartInfo">
                                            {apart.name}
                                            <small>
                                                <span>
                                                    {apart.address_1} {apart.address_2} {apart.address_3}
                                                </span>
                                            </small>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </Wrapper>
                    );
                    isStopRender = false;
                }
            })
        }
    }, [keyword]);

    return render;
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
        // <Wrapper>
        //     <div className="HeadAutoCompleteItem">
        //         <ul className="Items">
        //             {aparts.map((apart, index) =>
        //                 <li key={index} onClick={() => suggestionSelected(apart)}>
        //                     <Link to="/apartInfo">
        //                         {apart.name}
        //                         <small>
        //                             <span>
        //                                 {apart.address_1} {apart.address_2} {apart.address_3}
        //                             </span>
        //                         </small>
        //                     </Link>
        //                 </li>
        //             )}
        //         </ul>
        //     </div>
        // </Wrapper>
    // )
}

export default Aparts;