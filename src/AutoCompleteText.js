import React, {useState} from 'react';
import { version } from 'react-dom';
import './AutoCompleteText.css';

function AutoCompleteText(props){
    const [autoText, setAutoText] = useState({
        suggestions : [],
        text : ''
    });
    // const [suggestions, setSuggestions] = useState([]);
    // const [text, setText] = useState('');

    function onTextChanged(e){
        const items = props.items;
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}`, 'i');
            suggestions = items.sort().filter(v=>regex.test(v));
        }

        setAutoText({
            suggestions : suggestions,
            text : value
        });
    }

    function suggestionSelected (value){
        setAutoText({
            suggestions : [],
            text : value
        });
    }

    function renderSuggestions(){
        const suggestions = autoText.suggestions;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul className="nav">
                {suggestions.map((item) => <li onClick={()=> suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    return(
        <div className="AutoCompleteText">
            <input value={autoText.text} onChange={onTextChanged} type="text"/>
            {renderSuggestions()}
        </div>
    )
}

export default AutoCompleteText;