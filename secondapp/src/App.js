import React from 'react';
import './App.css';
import Namebar from'./Components/Namebar'
import Button from './Components/Button'
import Content from './Components/Content'

class App extends React.Component{

constructor(props){
  super(props);
  this.state = {show : '-80px'};
}

 onclick= () => {
   var display = '0px'

   if (this.state.show === '0px')
    display = '-80px';

   this.setState({show : display });
 }

 render(){
    return (
      <div className='box'>
       <div className='line'>
        <Namebar className='bar' name='Smit'/>
        <Button className='btn' onclick={this.onclick}/>
       </div>

       <Content className='content' show={this.state.show} content='ABC'/>
      </div>
    )
 }

}

export default App;
