import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'
import {GrLink, GrDownload, GrClose} from 'react-icons/gr'


const Download = () => {
   const {selectedBrands,setSelectedBrands}=useContext(MainContext)
   const [downloadUrl, setDownloadUrl]=useState()
   const getLink=()=>{
      prompt('link', `http://localhost:3000/collection/${selectedBrands.join(',')}`)
   }
   useEffect(()=>{
      if(selectedBrands.length>0){
         let output=''
      }
   },[selectedBrands])
  return (
    <div className='download'>
      <div className='action'>
         <a href={downloadUrl}>
            <GrDownload/>
         </a>
         <button onClick={getLink}>
            <GrLink/>
         </button>

      </div>
      <div className='selected' onClick={()=>setSelectedBrands([])}>
      <button><GrClose/></button>

      {selectedBrands.length}brands collected
      </div>
    </div>
  )
}

export default Download