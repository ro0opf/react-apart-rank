import React from 'react';
import { Wrapper } from './TopNav.css.js';
import {Link} from 'react-router-dom'

function TopNav() {
    const menuList = [
        { 
            menuName: "지역별 분석", url: "./regionalAnalysis",
        },
        { 
            menuName: "랭킹", url: "./ranking",
        },
        {   
            menuName: "분양정보", url: "./test",
            onClick : ()=>{
                alert("준비 중");
            } 
        },
        {   
            menuName: "부동산정보", url: "./test",
            onClick : ()=>{
                alert("준비 중");
            } 
        },
    ]

    function getMenuList() {
        return (
            <ul className="Nav">
                {menuList.map((menu) =>
                    <li key={menu.menuName}>
                        <Link to={menu.url}>
                            {menu.menuName}
                        </Link>
                    </li>
                )}
            </ul>
        )
    }
    return (
        <>
            <Wrapper>
                <div className="TopNav">
                    {getMenuList()}
                </div>
            </Wrapper>
        </>
    )
}

export default TopNav;