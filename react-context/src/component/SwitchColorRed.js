import  { useSite} from '../context'

function SwitchColorRed(){
   const {color, setColor}=useSite()
   return(
      <>
       Movcud reng--{color}<br/>
    <button onClick={()=>setColor(color=>color==='red'?'blue':'red')}>rengi deyis</button><br/>
      </>
   )
}
export default SwitchColorRed