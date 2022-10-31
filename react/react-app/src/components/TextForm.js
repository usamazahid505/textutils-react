import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Upper Click Was Cliked")
        // setText("You have Clicked to handleUpClick ")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "Success");
    }
    const handleloClick = ()=> {
      console.log("Lower Click Was Cliked")
      // setText("You have Clicked to handleUpClick ")
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "Success");
  }
  const handleclearClick = ()=> {
    console.log("Lower Click Was Cliked")
    // setText("You have Clicked to handleUpClick ")
    let newText = ("");
    setText(newText)
    props.showAlert("Text has been cleared", "Success");
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance;
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speak Something", "Success");
}

const replaceString=()=>{
  let repval=prompt("Enter the word to be replaced:")
  let tobereplaced= new RegExp(repval,'g');

  let toreplace=prompt("Enter the text that you want to replace with:");
  
  let newText= text.replace(tobereplaced,toreplace);
  setText(newText);
  
}
    const handleOnChange= (event)=>{
        console.log("Upper Click Was Cliked");
        setText(event.target.value);
    }


    const [text, setText] = useState('')
    

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'light'}}>
  <div className="mb-2">
  <div className="container my-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'light', color:props.mode ==='dark'?'white':'light' }} onChange={handleOnChange} id="myBox1" rows="8"></textarea><br></br>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Change to Upper</button>
  <button className="btn btn-success mx-1" onClick={handleloClick}>Change to Lower</button>
  <button className="btn btn-danger mx-1" onClick={handleclearClick}>Clear</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button className="btn btn-danger mx-1" onClick={replaceString}>Repalce</button>
  </div>
</div>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p>Words {text.split(" ").length},{text.length} Charters</p>
    <p>{0.008 * text.split(" ").length}</p>
    <h1>Preview</h1>
    <p>{text.length>0?text:" Enter your beautiful text to preview Here" }</p>
   </div>
    </>
  )
}

