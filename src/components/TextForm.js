import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        console.log("upper case clicked");
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // console.log(text);
        console.log("lower case clicked");
        props.showAlert("Converted to lower case", "success");
    }

    const handleCamClick = () => {
        let str = text.toLowerCase();
        setText(str);
        let newText = str.charAt(0).toUpperCase();
        for (let index = 1; index < str.length; index++) {
            if (str.charAt(index) === " ") {
                newText = newText + str.charAt(index);
                newText = newText + str.charAt(index + 1).toUpperCase();
                index++;
            } else {
                newText += str.charAt(index);
            }
        }
        setText(newText);
        console.log("camel case clicked");
        props.showAlert("Converted to camel case", "success");
    }

    const handleRevWordClick = () => {
        let str = text;
        str = str.split(" ").reverse().join(" ");
        setText(str);
        console.log("Reverse Words clicked");
        props.showAlert("Words reversed", "success");
    }

    const handleRevClick = () => {
        let str = text;
        str = str.split("").reverse().join("");
        setText(str);
        console.log("Rev sentence clicked");
        props.showAlert("All letters reversed", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        console.log("Extra spaces were removed");
        props.showAlert("Extra spaces removed", "success");
    }

    const handleCopy = () => {
        console.log("copying to clipboard");
        var txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    const handleClear = () => {
        setText("");
        console.log("text cleared");
        props.showAlert("Text area cleared", "success");
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading} </h2>
                <div className="mb-3" >
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>CONVERT TO UPPERCASE </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLoClick}>convert to lowercase </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCamClick}>Convert To Camel Case </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleRevWordClick}>Reverse Words </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleRevClick}>Reverse all Letters </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleExtraSpace}>Remove Extra Space </button>
                <div>
                    <button className="btn btn-success mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>Copy to Clipboard </button>
                    <button className="btn btn-danger  mx-1 my-1" disabled={text.length === 0} onClick={handleClear}>Clear All </button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>Estimated reading time: {text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.08} minutes</p>
            </div>
        </>
    )
}
