import React from 'react'

const Buttons = ({handleClick ,value, title}) => {
  return (
    <button onClick={handleClick} value={value} className='btn'>{title}</button>
  )
}

export default Buttons