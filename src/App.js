import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Faq from './components/Faq';
import Alert from './components/Alert';
import Quote from './components/Quote';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#090b17';
      document.body.style.color = 'white';
      showAlert("Welcome to the Dark Side", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Welcome to the Light Side", "success")
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  
  return (
    <>
        <Navbar title="Text Utils" mode="dark" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/quote" element={<Quote />}/>
            <Route exact path="/"  element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>

          <Faq heading="FAQs" mode={mode} />
        </div>
    </>
  );
}

export default App;
