
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
 
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert]=useState(null)
  const showAlert=(message,type)=>{
     setAlert({
      msg: message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     }, 1500);
     
  }
  const toggle =()=>{
    if(mode==="light"){
      setmode('dark')
      document.body.style.backgroundColor = '#3A3B3C'
      showAlert("Dark mode is on", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is on", "success")
    }
  }
  return (
  <>
 
  <Navbar title="TextUtils" mode={mode} ontoggle={toggle} />
  <Alert alert={alert}/>
  <div className="container my-3" >
 
          <TextForm show={showAlert} heading="Eneter the text to analyze" mode={mode}/>
          
        
   
  
  </div>
  
 
    </>
  );
}

export default App;
