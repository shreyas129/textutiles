import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        if (text.length === 0) {
            props.showAlert("There's nothing in the text box to change the text to uppercase", "Danger")
        }

        else{
            // console.log("Uppercase was clicked: " + text);
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to uppercase!", "success");
        }
    }

    const handleLoClick = () => {
        if (text.length === 0) {
            props.showAlert("There's nothing in the text box to change the text to lowercase", "Danger")
        }
        
        else {
            // console.log("Uppercase was clicked: " + text);
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to lowercase!", "success");
        }
    }

    const handleClearClick = () => {
        if (text.length === 0) {
            props.showAlert("There's nothing in the text box to clear the text", "Danger")
        }
        
        else {
            // console.log("Uppercase was clicked: " + text);
            let newText = '';
            setText(newText)
            props.showAlert("Cleared all the text that was in the textbox!", "success")
        }
    }

    const handleCopy = () => {
        if(text.length === 0){
            props.showAlert("There's nothing in the text box to copy the text", "Danger")
        }
        
        else {
            // console.log("I am copy");
            var text = document.getElementById("myBox");
            text.select();
            // text.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to clipbord!", "success")
        }
    }

    const handleExtraSpaces = () => {
        if(text.length === 0){
            props.showAlert("There's nothing in the text box to clear the extra spaces", "Danger")
        }

        else {danger
              let newText = text.split(/[ ]+/);
              setText(newText.join(" "))
              props.showAlert("Cleared all the extra spaces that was in the textbox!", "success")
        }
    }

const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
}

const noOfWord = (sentence) => {
    const words = sentence.split(" ");
    let i = 0;
    words.forEach((word) => {
        if (word.length > 0) {
            i++;
        }
    })
    return i;
}

const [text, setText] = useState('');
// text = "new text"; // Wrong way to change text 
// setText("new text"); // Correct way to change text
return (
    <>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            {/* <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button> */}
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2>Your text summary</h2>
            <p>{noOfWord(text)} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
)
}