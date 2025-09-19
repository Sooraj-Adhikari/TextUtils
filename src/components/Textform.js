import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
   let newText=text.toUpperCase();
   setText(newText);
   props.showAlert("Your text is converted to uppercase",'success');
  }

  const clrClick=()=>{
   let  neText="";
    setText(neText);
    props.showAlert("Your text has been cleared ",'success');
  }

  const handleLClick=()=>{
let nwText=text.toLowerCase();
setText(nwText);
props.showAlert("Your text is converted to lowercase",'success');

  }

  const handleOnChange=(event)=>{
setText(event.target.value);
  }



  const [text,setText]=useState("");
  return (
  <>
<div className="mb-3 container" style={{color : props.mode==='light'?'black':'white'}}>
    <h1>{props.heading} </h1>
  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{color :(props.mode==='light'?'black':'white'), backgroundColor : (props.mode==='light'?'white':'#042743')}}></textarea>
  <button disabled={text.length===0}  className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0}  className="btn btn-primary my-3 mx-2" onClick={handleLClick} >Convert to lowerCase</button>
  <button disabled={text.length===0}  className="btn btn-primary my-3 mx-1" onClick={clrClick} >Clear Text</button>
</div>
   
   <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
<h1>Your text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0;}).length} minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to Preview"}</p>
   </div>
   </>
  )
}
