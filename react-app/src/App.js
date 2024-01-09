import logo from './logo.svg';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/SignIn';
import Input2 from './pages/Input2';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>|
        <Link to="/about">About</Link>|
        <Link to="/counter">Counter</Link>|
        <Link to="/SignIn">SignIn</Link>|
        <Link to="/Input2">Input2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/Input2" element={<Input2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
