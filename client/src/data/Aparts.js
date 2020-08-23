import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

function hideAutoCompleteItem() {
    document.getElementsByClassName("HeadAutoCompleteItem")[0].hidden = true;
}

function Aparts(props) {
    const keyword = props.keyword;
    finalKeyword = keyword;
    const [render, setRender] = useState(null);

    useEffect(() => {
        if (keyword.length > 1) {
            getAsyncAparts(keyword).then((res) => {
                if (keyword === finalKeyword) {
                    isStopRender = true;
                }

                if (isStopRender) {
                    if (res.length === 0) {
                        setRender(null);
                    } else {
                        setRender(
                            <Wrapper>
                                <div className="HeadAutoCompleteItem">
                                    <ul className="Items">
                                        {res.map((apart, index) =>
                                            <li key={index}>
                                                <Link to={
                                                    {
                                                        pathname: `/apartInfo/` + index,
                                                        apart: apart
                                                    }} onClick={hideAutoCompleteItem}>
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
                    }
                    isStopRender = false;
                }
            })
        }
    }, [keyword]);

    if (keyword.length <= 1) {
        return null;
    }
    return render;
}

export default Aparts;