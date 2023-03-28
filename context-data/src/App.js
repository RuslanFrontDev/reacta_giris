import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Create from "./pages/Create"
import Home from "./pages/Home"
import Picture from "./pages/Picture"
import CartProvider from "./context/Context"
function App(){
  return(
    <>
    <CartProvider>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/picture" element={<Picture/>}/>
    </Routes>
    </CartProvider>
    
    </>
  )
}
export default  App