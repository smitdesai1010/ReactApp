import React from 'react'

function Content(props){
  return (
  <div style={{ display: props.showinfo }} className={props.className}>
   {props.content}
  </div> )
}

export default Content
