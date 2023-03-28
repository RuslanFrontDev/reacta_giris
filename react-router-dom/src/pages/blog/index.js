import React from 'react'
import { Outlet } from 'react-router-dom'

const BlogLayout = () => {
  return (
    <>
    <div>
      <ul>
         <li>
            listler-1
         </li>
         <li>
            listler-2
         </li>
      </ul>
    </div>
    <Outlet/>
    </>
  )
}

export default BlogLayout