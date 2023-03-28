import { useEffect, useState } from "react";
//Component
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";

//JSON
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket=()=>{
    setBasket([])
  }
  return (
    <>
      <Header total={total} money={money} />
      {products.map((product) => (
        <Product
          total={total}
          money={money}
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      ))}
      {total>0 &&(
      <Basket resetBasket={resetBasket} products={products} total={total} basket={basket}/>
  
      )}
    </>
  );
}
export default App;
