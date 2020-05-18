import React from 'react'

function Button(props){
  return <button onClick = {props.onclick} className={props.className}>+</button>
}

export default Button
