import React from "react";
import { useSite } from "../context/Context";

const CartDetails = ({
  id,
  imageUrl,
  description,
  price,
  productName,
  showAddBtn = true,
  showDeleteBtn=false,
  quantity
}) => {
  const { addCartShopps, deleteCart } = useSite();
  return (
    <div className="shopping-thing">
      <div className="shopping-choose">
        <div className="shopping-img">
          <img src={imageUrl} alt="ukuk"/>
        </div>
        <div className="shopping-web">
          <div className="shopping-name">
            <h2>{productName}</h2>
          </div>
          <div className="shopping-description">
            <p>{description}</p>
          </div>
          <div className="shopping-price">
            <span>Price: {price}</span>
            {quantity && <p>Quantity {quantity}</p>}
          </div>
        </div>
        {showAddBtn && (
          <button
            onClick={() =>
              addCartShopps(id, imageUrl, description, price, productName,quantity)
            }
          >
            Add Cart
          </button>
        )}
        {showDeleteBtn && (
          <button
            onClick={() =>
              deleteCart(id)
            }
          >
            Delete Cart
          </button>
        )}

        <div className="proud">
          Bu mallar musterilerimize ozel endirimlerle satilir
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
