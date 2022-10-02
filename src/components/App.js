
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 const[inputValue,setInputValue]=useState("");
 const[text,setText]=usestate("");
                              
                              
                              
   const changeInput=(e)=>{
  setInputValue(e.target.value);
 };
 
 const buttonClick=()=>{
  
  setText(text + inputValue);
  setInputValue("");
   };
 //code here 

 
  return (
    <div>
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
