import React from "react";
import { useState } from "react";

//component
import Input from "../component/Input";
import Button from "../component/Button";
//axios
import axios from "axios";

const Form = () => {
  const [users, setUsers] = useState({
    name:'',
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const handleChange=(e)=>{
    setUsers({...users, [e.target.name]:e.target.value})
  }
  const sendData=()=>{
    axios.post("http://localhost:9000/create-user",users)
    .then((res)=>{console.log(res)})
    
  }
  return (
    <div className="form">
      <Input
        name="name"
        value={users.name}
        placeholder='ad yaz...'
        type="text"
        className="name"
        onChange={handleChange}
      />
      <Input
        name="username"
        value={users.username}
        placeholder="soyad yaz..."
        type="text"
        className="username"
        onChange={handleChange}
      />
      <Input
        name="phone"
        value={users.phone}
        placeholder='telefon nöm. yaz...'
        type="text"
        className="phone"
        onChange={handleChange}
      />
      <Input
        name="email"
        value={users.email}
        placeholder='email yaz...'
        type="email"
        className="email"
        onChange={handleChange}
      />
      <Input
        name="password"
        value={users.password}
        placeholder='password yaz...'
        type="password"
        className="password"
        onChange={handleChange}
      />
      <Button title="Register" type="submit" onClick={sendData} className="register" />
    </div>
  );
};




// const [user, setUser]=useState([])

// const handleChange=(e)=>{
//   setUsers(e.target.value)
// }
// const onSubmitHandle=(e)=>{
//   e.preventDefautl()
//   setUser([...user,{...users}])
// }

// const sendData=(e)=>{
//   axios.post("http://localhost:9000/create-user",user)
//   .then((res)=>{console.log(res)})
// }



// return (
//   <form onSubmit={onSubmitHandle} className="form">
//     <Input
//       name="name"
//       value={users.name}
//       placeholder='ad yaz...'
//       type="text"
//       className="name"
//       onChange={handleChange}
//     />
//     <Input
//       name="username"
//       value={users.username}
//       placeholder="soyad yaz..."
//       type="text"
//       className="username"
//       onChange={handleChange}
//     />
//     <Input
//       name="phone"
//       value={users.phone}
//       placeholder='telefon nöm. yaz...'
//       type="text"
//       className="phone"
//       onChange={handleChange}
//     />
//     <Input
//       name="email"
//       value={users.email}
//       placeholder='email yaz...'
//       type="text"
//       className="email"
//       onChange={handleChange}
//     />
//     <Input
//       name="password"
//       value={users.password}
//       placeholder='password yaz...'
//       type="text"
//       className="password"
//       onChange={handleChange}
//     />
//     <Button title="Register" type="submit" onClick={sendData}  className="register" />
//   </form>
// );
// };

export default Form;
