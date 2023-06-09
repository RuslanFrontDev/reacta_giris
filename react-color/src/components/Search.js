//icon
import { useContext } from 'react'
import {BsSearch} from 'react-icons/bs'
import MainContext from '../MainContext'
function Search(){
   const {search, setSearch}=useContext(MainContext)
   return(
      <div className="search">
         <div className='icon'>
            <BsSearch/>
         </div>
        <input type='text' onChange={(e)=>setSearch(e.target.value)} placeholder='Search Brands'/>
      </div>
   )
}
export default Search