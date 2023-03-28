import { Route, Routes } from "react-router-dom";
import Header from "./component/Header"
//component
import Home from './pages/Home'
//page
import Details from "./pages/Details";
import DeleteData from "./pages/DeleteData";
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/details-data/:id" element={<DeleteData/>}/>
    </Routes>
    </>
  )
}

export default App;
