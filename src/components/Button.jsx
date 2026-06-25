import React from 'react'

const Button = ({text,className,onClick,disabled}) => {
  return (
    <div>
      <button className={className || 'btn'} onClick={onClick} disabled={disabled}>
        {text} 
      </button>
    </div>
  )
}

export default Button
