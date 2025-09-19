
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";



function App() {


const remove=()=>{
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
}


  const [mode,setMode]=useState('light');
  const toggleMode=(cls)=>{
    remove();
    document.body.classList.add('bg-'+cls);
  if(mode==='light'){
    setMode('dark');
    
    document.body.style.backgroundColor = '#042743';
    showAlert("Mode is set to dark","success");

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert("Mode is set to light","success");
  }
  
  }

  

  const [alert,setAlert]=useState(null);

  const showAlert=(message,status)=>{
       setAlert({
        message:message,
        status: status
       })
       setTimeout(()=>{
        setAlert(null);
       },1200);
  }

  

  return (
   <>
   <Router>
 <Navbar title='TextUtils'  about="About"  mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>

<div className='container my-3'>

<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
           
          <Route exact path="/" element = {<Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/> 
          
        </Routes>
        
      </div>
      
</Router>
</>
  );
}

export default App;
