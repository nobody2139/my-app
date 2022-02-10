import { useState } from 'react';
import './App.css';
// import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
      document.title = "TextUtiles - Light Mode"
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("dark mode has been enabled", "success")
      document.title = "TextUtiles - Dark Mode"
    }
  }
  const toggleGreenMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = 'green'
      showAlert("dark mode has been enabled", "success")
    }
  }
  const toggleBlueMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = 'blue'
      showAlert("dark mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="Textutiles2" aboutText="About" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} toggleBlueMode={toggleBlueMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container">
        {/* <Routes>
        <Route exact path="/" element={ */}
        <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
        {/* } /> */}
        {/* <Route exact path="about" element={<About />}>
        </Route>
      </Routes> */}
        </div>
      
    {/* </BrowserRouter> */}
    </>
  );

}

export default App;
