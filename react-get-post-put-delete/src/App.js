import { Route, Routes } from "react-router-dom"
//pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Edit from "./pages/Edit"
import Details from "./pages/Details"
function App(){
   return(
      <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit/:productId" element={<Edit/>}/>
      <Route path="/products/:productId" element={<Details/>}/>
      </Routes>
      </>
   )
}
export default App