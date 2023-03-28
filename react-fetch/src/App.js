import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName]=useState('ruslan');
  const [avatar,setAvatar]=useState(false)
  const [users, setUsers] = useState(false);
  const addPost = (data) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    addPost({
      userId: 1,
      title: "ruslan",
      body: "post atdim",
    });
  }, []);
  

  const submitHandle=(e)=>{
    e.preventDefault()
    console.log('submit')
  }
  return (
    <>
    <form onSubmit={submitHandle}>
      <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}/> <br/>
      <input type='file' name="avatar" onChange={e=>setAvatar(e.target.files[0])}/><br/>
      <button type="submit" disabled={!name || !avatar}>qeyd et</button>
    </form>
    <h1>User List</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default App;
