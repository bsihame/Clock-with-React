import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock"
setInterval(App, 1000)
function App() {
  return (
    <div className="App">

      <Clock />
      
    </div>
  );
}

export default App;
