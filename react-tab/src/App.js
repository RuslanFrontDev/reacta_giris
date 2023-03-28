import { useState } from "react"
import Tab from "./Tab"
function App(){
  const [tab,setTab]=useState(0)
  return(
    <>
    <div className="tab" style={{padding:5}}>
    <div>
         <button onClick={()=>setTab(2)}>tab ancaq 3-e kecir</button>
        </div>
      <Tab activeTab={tab} setActiveTab={setTab} sec>
        <Tab.Panel title='one'>1.ci tab</Tab.Panel>
        <Tab.Panel title='two'>2.ci tab</Tab.Panel>
        <Tab.Panel title='three'>3.cu tab</Tab.Panel>
      </Tab>
    </div>
    </>
  )
}
export default App