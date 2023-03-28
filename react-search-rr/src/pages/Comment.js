import React, { useState } from "react";
//component
import Input from "../component/Input";
import Button from "../component/Button";
import axios from "axios";
const Comment = () => {
  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    textarea: "",
  });

  const submitHandle = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:9000/create-user", users)
      .then((res) => console.log(res.data));
  };
  const changeHandle = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <Input
          type="text"
          placeholder="ad yaz..."
          value={users.name}
          name="name"
          onChange={changeHandle}
        />
        <Input
          type="text"
          placeholder="soyad yaz..."
          value={users.username}
          name="username"
          onChange={changeHandle}
        />
        <Input
          type="email"
          placeholder="email yaz..."
          value={users.email}
          name="email"
          onChange={changeHandle}
        />
        <Input
          type="password"
          placeholder="password yaz..."
          value={users.password}
          name="password"
          onChange={changeHandle}
        />
        <textarea
          placeholder="Fikirlerini bildir"
          value={users.textarea}
          onChange={changeHandle}
          name='textarea'
          style={{ color: "blue" }}
        ></textarea>
        <Button type="submit" className="submit" />
      </form>
    </div>
  );
};

export default Comment;
