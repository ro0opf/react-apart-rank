import React from 'react';
import { Wrapper } from './TopNav.css.js';

function TopNav() {
    const menuList = [
        { 
            menuName: "지역별 분석", url: "./test", 
            onClick : ()=>{
                alert("준비 중");
            }
        },
        { 
            menuName: "통계", url: "./test",
            onClick : ()=>{
                alert("준비 중");
            }
        },
        {   
            menuName: "랭킹", url: "./test",
            onClick : ()=>{
                alert("준비 중");
            } 
        },
    ]

    function getMenuList() {
        return (
            <ul className="Nav">
                {menuList.map((menu) =>
                    <li key={menu.menuName} onClick={menu.onClick}>
                        <a href="#">
                            {menu.menuName}
                        </a>
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