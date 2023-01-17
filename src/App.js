import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";


function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  let showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  let lightMode=()=>{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode has been enabled","success");
      document.body.button.style.color="red";
    
  }
  let darkMode = () =>{

    setMode("dark");
    document.body.style.backgroundColor="#022E4B";
    document.body.style.color="white";
    showAlert("Dark mode has been enabled!","success")
    document.body.button.style.backgroundColor="danger";
  }
  let yellowMode = () =>{

    setMode("warning");
    document.body.style.backgroundColor="#ffcc00";
    document.body.style.color="white";
    showAlert("Yellow mode has been enabled!","success")
    
  }
  return (<>
  <Router>
        <Navbar title = "TextUtils" About = "About" mode={mode} lightMode={lightMode} yellowMode={yellowMode} darkMode={darkMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          
          <Routes>
            <Route exact path = "/about" element={<About />}/>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode = {mode} />}/>
          </Routes>
          
        </div>
        </Router>
  </>

    
  );
}

export default App;
