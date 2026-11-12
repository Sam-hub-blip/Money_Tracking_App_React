import React from 'react'

const Button = ( {invert, setInvert}) => {
  return (
    <button type='button' onClick={(e)=> setInvert(!invert)} >Invert {invert}</button>
  )
}

export default Button