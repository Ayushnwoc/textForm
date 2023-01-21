import React from 'react'
import { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = (e) => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to UpperCase" , "success");
    }
    const handleLowClick = (e) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to LowerCase" , "success");
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState('');


    return (
        <>
            <div className={`container mb-3 my-5 text-${props.mode==='light'?'dark':'light'}`}>
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
                <button className={`btn btn-${props.mode} my-2 mx-2`} onClick={handleUpClick}>Uppercase</button>
                <button className={`btn btn-${props.mode} my-2 mx-2`} onClick={handleLowClick}>Lowercase</button>
            </div>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            </div>
        </>
    )
}
