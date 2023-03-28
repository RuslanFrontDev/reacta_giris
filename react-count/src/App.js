import {Test,} from './component/Test'
import { useState } from 'react'
function App(){
  const[show,setShow]=useState(false)
  return(
    <>
      <button onClick={()=>setShow(show=>!show)}>
         {show?'gizlet':'goster'}
      </button>
      {show &&  <Test/>}
   
    </>
  )
}
export default App
