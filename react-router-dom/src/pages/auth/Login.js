import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useFormik, Formik, Form, Field } from 'formik'
const Login = () => {
   const {setUser} = useAuth()
   const navigate =useNavigate()
   const location = useLocation()
  
  //  const {handleSubmit, handleChange, values} = useFormik({
  //   initialValues:{
  //     username:'',
  //     password:''
  //   },
  //   onSubmit: values =>{
  //     setUser(values)
  //      navigate(location?.state?.return_url || '/');
  //   }
  //  })
  return (
    <div>Login
      <Formik initialValues={{
        username:'',
        password:''
      }}
      onSubmit={(values)=>{
        setUser(values)
       navigate(location?.state?.return_url || '/');
      }}
      >
        {({values}) => (
          <Form>
            <Field type='text' name='username'/><br/>
            <Field type='password' name='password'/><br/>
            <button type='submit'>giris et</button>
          </Form>
        )}

      </Formik>
      {/* <form onSubmit={handleSubmit}>
      <label htmlFor="username">kullanici ad: </label>
      <input
         id="username"
         type="text"
         onChange={handleChange}
         value={values.firstName}
       /><br/>
       <label htmlFor='password'>Parol</label>
       <input
         id="password"
         type="password"
         onChange={handleChange}
         value={values.password}
       /><br/>
       <button type='submit'>Giris et</button>
      </form> */}
    </div>
  )
}

export default Login