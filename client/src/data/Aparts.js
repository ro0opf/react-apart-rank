import React, { } from 'react';
import axios from 'axios';
import { useAsync } from '../util/useAsync';
import { Link } from 'react-router-dom';
import { Wrapper } from './Aparts.css'
import {env} from '../common/Env.js';

async function getAsyncAparts(keyword) {
    console.log(keyword);
    for (const i = 0; i < keyword.length; i++) {
        if (keyword.charCodeAt(i) < 44032 || keyword.charCodeAt(i) > 55203) {
            console.log("BAD");
            // return null;
        }
    }
    const response = await axios.get(env.serverAddress + '/apart', {
        params: {
            apart_name: keyword
        },
    });
    console.log("async : " + keyword);
    return response.data;
}

function suggestionSelected(value) {
    console.log("asfesef");
}

function Aparts(props) {
    const keyword = props.keyword;
    const [state, refetch] = useAsync(() => getAsyncAparts(props.keyword), [props.keyword]);
    const { loading, data: aparts, error } = state;

    if (keyword.length < 2) {
        return null;
    }

    if (loading) {
        return <div>로딩중...</div>;
    }

    if (error) {
        return <div>에러!!!</div>;
    }

    if (!aparts) {
        return null;
    }

    return (
        <Wrapper>
            <div className="HeadAutoCompleteItem">
                <ul className="Items">
                    {aparts.map((apart, index) =>
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
    )
}

export default Aparts;