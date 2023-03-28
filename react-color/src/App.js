//component
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MainContext from "./MainContext";
import BrandsData from './brands.json'
//usetate
import { useEffect, useState } from "react"
import Coppied from "./components/Coppied";


function App() {
  
  const brandArray=[]
  Object.keys(BrandsData).map(key=>{
     brandArray.push(BrandsData[key])
  })

  const [brands, setBrands]=useState(brandArray)
  const [selectedBrands,setSelectedBrands]=useState([])
  const [copied, setCopied]=useState(false)
  const [search, setSearch]=useState('')
console.log(brands);
  const data={
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  useEffect(()=>{
    if(copied){
      setTimeout(()=>{
        setCopied(false)
      },1000)
    }
  },[copied])

  useEffect(()=>{
    setBrands(brandArray.filter(brand=>brand.title.toLowerCase().includes(search)))
  },[search])

  return (
    <>
      <MainContext.Provider value={data}>
      {copied && <Coppied color={copied}/>}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}
export default App;
