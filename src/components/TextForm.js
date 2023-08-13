import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.show("Converted to uppercase", "success");
  }
  const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.show("Converted to lowercase", "success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div>
      <h1 style={{color:props.mode==='light'?'#3A3B3C':'white'}}>{props.heading} </h1>
    <div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}} id="exampleFormControlTextarea1" rows="9"></textarea>
</div>
<button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
<button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'#3A3B3C':'white'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
 