import { useEffect, useRef, useState } from "react";
import Brands from "./cart.json";
function App() {
  let cart = [];
  Object.keys(Brands).map((shopping) => cart.push(Brands[shopping]));

  // console.log(cart);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const searchRef = useRef();
  const isTyping = search.replace(/\s+/, "").length > 0;

  useEffect(() => {
    if (isTyping) {
      setResult(
        cart.filter((item) =>
          item.productName.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setResult([]);
    }
    // const getData=setTimeout(()=>{
    //  cart && setResult(cart)
    // },1000)

    // return ()=>{
    //   clearTimeout(getData)
    // }
  }, [search]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearch("");
    }
  };
  const getResultItem=(item)=>{
    console.log(item);
  }
  return (
    <>
      <div className="search" ref={searchRef}>
        <input
          type="text"
          value={search}
          placeholder="axtar..."
          className={isTyping ? "typing" : null}
          onChange={(e) => setSearch(e.target.value)}
        />
        {result && isTyping && (
          <div className="search-result">
            {result.map((item) => (
              <div onClick={()=>getResultItem(item)} key={item.id} className="search-result-item">
                <img src={item.imageUrl} />
                <div>
                  <div className="productName">{item.productName}</div>
                  <div className="price">{item.price}</div>
                </div>
              </div>
            ))}
            {result.length === 0 && (
              <div className="result-not-found">
                '{search}' ile axtardiginiz soz yox
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default App;
