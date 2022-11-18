import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');
  
  const getAdvice = async() => {
        const response = await fetch('http://www.boredapi.com/api/activity/');
        const data  = await response.json();
        setAdvice(data.activity)
      };

  useEffect(() => { 
    getAdvice();
  }, []);


  return (

    <div>
   <div>
      <Carousel/>

    </div>

    <div className="App">
      <p>{advice}</p>
      <div className='button-container'>
      <button onClick={getAdvice}>Show Me Another Advice</button>
    </div>
    </div>

    </div>
  );
}

export default App;

