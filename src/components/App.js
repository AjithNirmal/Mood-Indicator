import React from 'react'
import '../styles/App.css';
import { useState } from 'react';
const App = () => {
  const [value,Setvalue] = useState("Happy")
   const handleChange = (e)=>{
       Setvalue(e.target.value)
  }
  return (
    <div id="main">
      <select value ={value} onChange={(e)=>handleChange(e)}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" className={value}></div>
    </div>
  )
}


export default App;
