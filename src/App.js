
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [widthCount,setWidthCount] = useState(window.screen.width);

  const actualWidth =() =>{
    setWidthCount(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize',actualWidth);
    return () => {
      window.removeEventListener('resize',actualWidth);
    }
  })



  return (
    <div>
      <p>The Actual size of window is :</p>
      <h1>{widthCount}</h1>
    </div>
  );
}

export default App;
