import React, {useState, useRef} from 'react';
import './AutoCompleteText.css';

function AutoCompleteText(props){
    const [autoText, setAutoText] = useState({
        suggestions : [],
        text : ''
    });
    // const [suggestions, setSuggestions] = useState([]);
    // const [text, setText] = useState('');

    function onTextChanged(e){
        const keys = Object.keys(props.items);
        const items = props.items.keys;
        const value = e.target.value;

        props.test(false);
        
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}`, 'i');
            keys.forEach(function(element, index, array){
                var match = regex.exec(element);
                
                if(match != null){
                    suggestions.push([element, props.items[element]]);
                }
            });
        }

        setAutoText({
            suggestions : suggestions,
            text : value
        });
    }

    function suggestionSelected (value){
        setAutoText({
            suggestions : [],
            text : value[0]
        });
    }

    function renderSuggestions(){
        const suggestions = autoText.suggestions;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul className="nav">
                {suggestions.map((item) => 
                    <li onClick={()=> suggestionSelected(item)}>
                        {item[0]}
                        <small>
                            <span>
                                {item[1][0].address}
                            </span>
                        </small>
                    </li>
                )}
            </ul>
        );
    }

    const scrollToAutoCompleteText = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const myRef = useRef(null);    
    const executeScroll = () => scrollToAutoCompleteText(myRef);

    return(
        <div ref={myRef} className="AutoCompleteText">
            <input onClick={executeScroll} value={autoText.text} onChange={onTextChanged} type="text"/>
            {renderSuggestions()}
        </div>
    )
}

export default AutoCompleteText;