import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState('null');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2950);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtiles - Dark Mode';
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtiles - Light Mode';
      // setInterval(() => {
      //   document.title = 'TextUtiles is Amazing!';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtiles now!';
      // }, 1500);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtiles" aboutText="about us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About toggleMode={toggleMode} showAlert={showAlert} btnText="Enable dark mode +" />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;