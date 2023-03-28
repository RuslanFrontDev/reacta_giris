import { Route, Routes } from 'react-router-dom'
//component
import Header from './component/Header'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import Comment from './pages/Comment'
import UserCommment from './pages/UserCommment'
function App(){
   return(
      <>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/details/:id' element={<Details/>}></Route>
         <Route path='/coment' element={<Comment/>}></Route>
         <Route path='/user-comment' element={<UserCommment/>}></Route>
      </Routes>
      </>
   )
}
export default App