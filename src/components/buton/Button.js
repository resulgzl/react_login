import React from 'react'
import "./button.css";

function Button({onClick}) {
  return (
      <button onClick={onClick}>Giriş Yap</button>
  )
}

export default Button
