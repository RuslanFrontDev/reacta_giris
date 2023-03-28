import SwitchColorRed from "./SwitchColorRed"
import SwitchLanguageAze from "./SwitchLanguageAze"
import { useAuth } from "../context"

function Header(){
  const {user, setUser}=useAuth()
  const login=()=>{
    setUser({
      name:'ruslan',
      id:1
    })
  }
  const logout = ()=>{
    setUser(false)
  }
  return(
    <header>
      {user && <button onClick={logout}>Cixis et</button> || <button onClick={login}>Giris et</button>}
      <hr/>
      <SwitchColorRed />
      <SwitchLanguageAze />
    </header>
  )
}
export default Header