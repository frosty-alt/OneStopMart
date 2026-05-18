import React from 'react'

const Button = ({text,className,onClick}) => {
  return (
    <div>
      <button className={className || 'btn'} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
