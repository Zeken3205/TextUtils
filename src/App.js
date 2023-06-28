import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "rgb(21, 22, 30)";
      showAlert("Dark Mode enabled", "success")
    }
    else if (mode === 'dark') {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Textform heading="Enter your text here" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
