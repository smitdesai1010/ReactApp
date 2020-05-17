import React from 'react';
import './App.css';
import Namebar from'./Components/Namebar'
import Button from './Components/Button'

class App extends React.Component{

 render(){
    return (
      <div className='box'>
       <div className='line'>
        <Namebar className='bar' name='Smit'/>
        <Button className='btn'/>
       </div>

       <Content className='content' content='ABC'>
      </div>
    )
 }

}

export default App;
