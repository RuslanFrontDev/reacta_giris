const { createContext, useState, useContext } = require("react");

const Context = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(false);
  const data = {
    user,
    setUser,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
export const useAuth = () => useContext(Context);
export default AuthProvider;
