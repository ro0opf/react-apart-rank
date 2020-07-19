import React, { useState } from 'react';
import './Footer.css';

function Footer() {

    return (
        <>
            <div className="Footer">
                <div className="MobileToPc" onclick="location.href='#'">PC버전 보기</div>
                <ul>
                    <li>
                        <div onclick="location.href='#'">About LifeInUs</div>
                    </li>
                    <li>
                        |
                </li>
                    <li>
                        <div onclick="location.href='#'">도움말</div>
                    </li>
                    <li>
                        |
                </li>
                    <li>
                        <div onclick="location.href='#'">문의/피드백</div>
                    </li>
                </ul>
                <div className="copyright">
                    <p>
                        <span>Copyright</span>
                    ©
                    <a href="https://ro0opf.github.io/" target="_blank">LifeInUs Corp.</a>
                        <span>All Rights Reserved.</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;