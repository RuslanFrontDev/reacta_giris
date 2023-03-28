import { useSite} from '../context'

function SwitchLanguageAze(){
   const {language, setLanguage}=useSite()
   return(
      <>
       Movcud dil--{language}<br/>
    <button onClick={()=>setLanguage(language=>language==='az'?'tr':'az')}>rengi deyis</button>
      </>
   )
}
export default SwitchLanguageAze