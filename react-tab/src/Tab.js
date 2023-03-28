import { useEffect, useState} from 'react'
import './assets/App/app.scss'
function Tab({children,activeTab,setActiveTab}){
   // const [state,setState]=useState(activeTab);
   // useEffect(()=>{
   //    setState(activeTab)
   // },[activeTab])
   return(
      <>
      {/* asağıdakı  butonun active olmağı üçün------------------- */}
      <nav>
        {children.map((item,index)=><button className='btn' onClick={()=>setActiveTab(index)} key={index}>{item.props.title}</button>)}

      </nav>
      <>{children[activeTab]}</>
      </>

   )
}
Tab.Panel=function({children}){
   return(
      <div className='title'>{children}</div>
   )
}
export default Tab