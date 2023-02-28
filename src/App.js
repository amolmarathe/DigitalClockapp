import React, { useState } from "react";
import './App.css';

function App() {

  let Time = new Date().toDateString();

  const [ctn, setCtn] = useState(Time);

  const UpdateTime = () => {


    Time = new Date().toLocaleTimeString();
    setCtn(Time)

  }

  setInterval(UpdateTime)

  return (
    <div className="App">
      <h1 className="ctn">{ctn}</h1>
    </div>

  )
}
export default App;