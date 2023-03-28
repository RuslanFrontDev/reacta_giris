import React from 'react'

const Button = ({type, onClick,className, title}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {title}
    </button>
  )
}

export default Button