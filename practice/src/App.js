import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slides';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Slider />
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;