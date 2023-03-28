import React, { useState } from "react";
import CartDetails from "../components/CartDetails";
import { useSite } from "../context/Context";
const Home = () => {
  const { things,setThings } = useSite();
  return (
    <div className="m-top">
      {things.map((thing) => (
        <CartDetails
          key={thing.id}
          description={thing.description}
          id={thing.id}
          imageUrl={thing.imageUrl}
          price={thing.price}
          quantity={thing.quantity}
          productName={thing.productName}
        />
      ))}
    </div>
  );
};

export default Home;
