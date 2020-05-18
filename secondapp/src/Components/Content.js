import React from 'react'

function Content(props){

  var value='translateY('+props.show+')';

  return (
  <div style={{ transform: value }} className={props.className}>
   {props.content}
  </div> )
}


export default Content
