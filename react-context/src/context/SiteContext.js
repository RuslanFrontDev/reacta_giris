const { createContext, useState, useContext } = require("react");

const Context = createContext();
function Provider({ children }) {
  const [color, setColor] = useState("red");
  const [language, setLanguage] = useState("az");
  const data = {
    color,
    setColor,
    language,
    setLanguage,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
export const useSite = () => useContext(Context);
export default Provider;
