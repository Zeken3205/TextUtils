import React, { useState } from 'react';

function Textform(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpChange = (event) => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoChange = (event) => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase", "success")
    }
    const cleartext = (event) => {
        setText('')
        props.showAlert("Text Cleared", "success")
    }
    const correctgrammer = () => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setText(str2);
        props.showAlert("grammer Corrected", "success")
    }
    return (
        <>
            <div className="mb-3 " style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#303246" : "white", color: props.mode === "dark" ? "white" : "black" }} id="exampleFormControlTextarea1" rows="5"></textarea>
                <button className="btn btn-primary mx-2 my-3 " disabled={text.length === 0} onClick={handleUpChange}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-3 " disabled={text.length === 0} onClick={handleLoChange}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-3 " disabled={text.length === 0} onClick={correctgrammer}>Correct Grammer</button>
                <button className="btn btn-primary mx-2 my-3 " disabled={text.length === 0} onClick={cleartext}>Clear</button>
            </div>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Textform
