// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { type } from '@testing-library/user-event/dist/type';
// import {Routes, Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not....
  const [alert, setAlert] = useState('null');

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "Success")
      
      setInterval(() => {
        document.title = 'TextUtil is Amazing Website'
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtil Now'
      }, 1500);
    }
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light Mode Has Been Enabled", "Success")
  document.title = 'TextUtils - LightMode'
  
  }
   }


  return (
    <>
    <Router>
   <Navbar title ="TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div>
   
   <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert = {showAlert} heading="Enter your Text Here" mode={mode}/>
          </Route>
    </Switch>
   
   {/* <About/> */}
  
   </div>
   </Router>
    </>
  );
  
}

export default App;
