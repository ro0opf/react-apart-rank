import React, { useRef } from 'react';
import {Wrapper} from './AutoCompleteText.css.js';

function AutoCompleteText(props) {
    function onTextChanged(e) {
        const value = e.target.value;

        if (value.length > 0) {
            props.setKeyword(value);
        }
    }

    const scrollToAutoCompleteText = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const myRef = useRef(null);
    const executeScroll = () => scrollToAutoCompleteText(myRef);

    return (
        <Wrapper>
            <div ref={myRef} className="AutoCompleteText">
                <input onClick={executeScroll} value={props.cmpApart} onChange={onTextChanged} type="text" />
            </div>
        </Wrapper>
    )
}

export default AutoCompleteText;