import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function PrivateProfile({children}){
   const {user}=useAuth()
   const location = useLocation()
   if(!user){
      return <Navigate to='/auth/login'replace={true} state={{
         return_url:location.pathname
      }}/>
   }
   return children
}

export default PrivateProfile