import React from 'react'
import "./input.css";

function Input({type,placeholder,onChange}) {
  return (
      <input type={type} placeholder={placeholder} onChange={onChange} required/>
  )
}

export default Input
