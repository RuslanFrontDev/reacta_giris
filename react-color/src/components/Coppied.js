import React from 'react'
import { getContrastYIQ } from "../helpers"
const Coppied = ({color}) => {
  return (
    <div className='copied' style={{'--bgColor':`#${color}`, '--textColor':`#${getContrastYIQ(color)}`}}>
      Coppied #{color} to clipboard
    </div>
  )
}

export default Coppied