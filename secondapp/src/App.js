import React from 'react';
import './App.css';

function App() {
  const list = [1,2,3,4,5,6];

  const data = num => {

    if (num === 40)
     return <h1>{num}</h1>

    return <li>{num}</li>
  }

  return (
    <div className="App">
      {list.map( num=> data(num*10) )}
    </div>
  );
}

export default App;
