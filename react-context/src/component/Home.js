import { useAuth } from '../context'

const Home = () => {
   const {user}=useAuth()
  return (
    <div>
       {user && (
          <div style={{padding:10, border:'1px solid red'}}>
            bu alan sadece giris olunanda gorunur
          </div>
        )}
    </div>
  )
}

export default Home