import React from 'react';
import './App.css';
import Namebar from'./Components/Namebar'
import Button from './Components/Button'
import Content from './Components/Content'

class App extends React.Component{

constructor(props){
  super(props);
  this.state = {showinfo : 'none'};
}

 onclick= () => {
   var display = 'block'

   if (this.state.showinfo === 'block')
    display = 'none';

   this.setState({showinfo : display });
 }

 render(){
    return (
      <div className='box'>
       <div className='line'>
        <Namebar className='bar' name='Smit'/>
        <Button className='btn' onclick={this.onclick}/>
       </div>

       <Content className='content' showinfo={this.state.showinfo} content='ABC'/>
      </div>
    )
 }

}

export default App;
