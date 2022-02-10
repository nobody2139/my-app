import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here')
    return(
    <>
    <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8" style={{backgroundColor:props.mode === 'light'?'white':'grey',color:props.mode === 'light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>convert to Lower case</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
        <h1>your text summery</h1>
        <p>{text.split(" ").length-1} word and {text.length}character</p>
        <p>{0.008 * (text.split(" ").length-1)} time takes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>email words{text.split(" ").find((a)=>{a.split("").includes("@")})}</p>
    </div>
    </>)
}
 