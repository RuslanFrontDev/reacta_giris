import React from 'react'
import { Route, Routes } from 'react-router-dom'
//component
import Header from './component/Header'
//pages
import Home from './pages/Home'
import Form from './pages/Form'
import AllData from './pages/AllData'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/alldata' element={<AllData/>}/>
      </Routes>
    </div>
  )
}

export default App