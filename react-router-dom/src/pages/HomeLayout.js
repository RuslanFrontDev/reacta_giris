import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
   <nav>
   <NavLink
     className={({ isActive }) => isActive && "aktiv"}
     style={({ isActive }) => ({
       backgroundColor: isActive ? "blue" : "yellow",
     })}
     to="/"
   >
     Home
   </NavLink>
   <NavLink to="/contact">Contact</NavLink>
   <NavLink
     style={({ isActive }) => ({
       color: isActive && "white",
       padding: isActive && "5px",
       textDecoration: isActive && "none",
     })}
     to="/blog"
   >
     {({isActive}) => 
       <>
         Blog
         {isActive && " Aktiv"}
       </>
     }
   </NavLink>
   <NavLink to="/profile">Profil</NavLink>
   <Outlet/>
 </nav>
  )
}

export default HomeLayout