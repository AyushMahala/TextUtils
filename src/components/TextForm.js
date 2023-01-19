import React,{useState} from 'react';

export default function TextForm(props) {
  const handleUpperCase = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  }

  const handleLowerCase = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  }
  const handleClearCase = ()=>{
    let newText=('');
    setText(newText);
    props.showAlert("Cleared text!","success")
  }
  const handleCopy=()=>{
    console.log("Copied ");
    var copy = document.getElementById("myBox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success")
  }

  const handleExtraSpaces = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("ExtraSpaces removed","success")
  }

  const handleOnChange = (event)=>{
    console.log(event);
    setText(event.target.value);
  }


  const [text,setText] = useState('');
  // setText("NEWTEXT");
  return (
    <>
  <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control"  style={{backgroundColor:props.mode==="dark"?"#165872":"white", color:props.mode==="dark"?"white":"black"}} placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length === 0}  onClick={handleUpperCase}  className="btn btn-primary mx-2 my-1"> Convert to Uppercase</button>
       <button disabled={text.length === 0}  onClick={handleLowerCase}  className="btn btn-primary mx-2 my-1"> Convert to Lowercase</button>
       <button disabled={text.length === 0}  onClick={handleClearCase}  className="btn btn-primary mx-2 my-1"> Clear Text</button>
       <button disabled={text.length === 0}  onClick={handleCopy}  className="btn btn-primary mx-2 my-1"> Copy Text</button>
       <button disabled={text.length === 0}  onClick={handleExtraSpaces}  className="btn btn-primary mx-2 my-1">Remove Extra Spaces</button>
  </div>
  <div className="container my-3">
    <h2>Your Text Summmary</h2>
    <p> <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
    <p> <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes to read <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words</p>
    <h2>Preview</h2>
    <p> {text.length>0?text:"Enter something in above textbox to preview it here" }</p>
  </div>
    </>
  );
}
