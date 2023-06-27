import logo from './logo.svg';
import './App.css';
import { About } from './page/homePage';
import './styles/base/Base.css'
import React, { useState, useEffect } from 'react';

// Custom hook to track window width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

const ErrorMessage = () => (
  <p style={{color: 'black', backgroundColor: 'white'}}>
    This website is best viewed on a laptop or desktop screen
  </p>
);

function App() {
  const windowWidth = useWindowWidth();
  return (
    <div className="App">
      {windowWidth >= 1000 ? <About /> : ErrorMessage()}
    </div>
  );
}

export default App;
