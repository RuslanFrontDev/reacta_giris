import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { setUser, user } = useAuth();
  const logout = () => {
    setUser(false);
  };
  return (
    <div>
      Profile
      {!user && <Link to='/auth/login'>giris et</Link>}
      {user && <button onClick={logout}>Cixis et</button>}
    </div>
  );
};

export default Profile;
