import React from "react";

const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    console.log(checkBasket);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <>
      <div className="product">
        <h6>{product.title}</h6>
        <div className="price">$ {product.price}</div>
        <div className="actions">
          <button disabled={!basketItem} onClick={removeBasket}>
            Sat
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button disabled={total + product.price > money} onClick={addBasket}>
            Satin al
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
