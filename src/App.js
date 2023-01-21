import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null);

  const showAlert=(message , type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode =()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="Tetils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm alert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </>
  );
}

export default App;
