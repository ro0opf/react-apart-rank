import React from 'react';
import { Wrapper } from './Footer.css.js';

function Footer() {
    function test(){
        console.log("TODO");
    }

    return (
        <>
            <Wrapper>
                <div className="MobileToPc" onClick={test}>PC버전 보기</div>
                <ul>
                    <li>
                        <div onClick={test}>About LifeInUs</div>
                    </li>
                    <li className="Seperator">
                        |
                    </li>
                    <li>
                        <div onClick={test}>도움말</div>
                    </li>
                    <li className="Seperator">
                        |
                    </li>
                    <li>
                        <div onClick={test}>문의/피드백</div>
                    </li>
                </ul>
                <div className="copyright">
                    <p>
                        <span>Copyright</span>
                    ©
                    <a href="https://ro0opf.github.io/" target="_blank" rel="noopener noreferrer">LifeInUs Corp.</a>
                        <span> All Rights Reserved.</span>
                    </p>
                </div>
            </Wrapper>
        </>
    )
}

export default Footer;