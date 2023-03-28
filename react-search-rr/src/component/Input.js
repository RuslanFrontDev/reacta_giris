import React from 'react'

const Input = ({name,className,type, value,placeholder, onChange}) => {
  return (
    <input type={type} className={className} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input