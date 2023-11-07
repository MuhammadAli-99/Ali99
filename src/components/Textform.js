import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const handleToClick=()=>
  {
    console.log("Lowercase was clicked" + text);
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClearClick=()=>
  {
    let newText="";
    setText(newText);
    props.showAlert("Text cleared","success");
  }
  const handleCopy=()=>
  {
    var text= document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");

   
  }
  const handleSpaces=()=>
  {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }
  const [text, setText]= useState('Enter text here'); 
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'#030d2c'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#030d2c'}} id="my-box" rows="8"></textarea>
        </div> 
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleToClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#030d2c'}}>
<h2>Your Text here</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length } Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:'Enter your text to preview'}</p>

    </div>
    </>
  )
}
