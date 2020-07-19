import React, { useState } from 'react';
import './TopNav.css';

function TopNav() {
    const menuList = [
        { menuName: "지역별 분석", url : "./test"},
        { menuName: "통계", url : "./test"},
        { menuName: "랭킹", url : "./test"},
    ]

    function fTest(){
        console.log("testset");
    }

    function getMenuList() {
        return (
            <ul className="Nav">
                {menuList.map((menu) =>
                    <li onClick={() => fTest()}>
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
            <div className="TopNav">
                {getMenuList()}
            </div>
        </>
    )
}

export default TopNav;