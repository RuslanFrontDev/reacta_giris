import React from "react";

const ProductCard = ({
  id,
  imageUrl,
  productName,
  price,
  description,
  quantity,
  onClick,
  showAddButton = true,
  showDeleteButton = false,
}) => {
  return (
    <div className="products">
      <div className="img">
        <img src={imageUrl} />
      </div>
      <div className="products-things">
        <div className="productName-price">
          <p>{productName}</p>
          <span>Price:{price}</span>
          {quantity && <em>Quantity {quantity}</em>}
        </div>
        <h5>{description}</h5>
        {showAddButton && <button onClick={onClick}>AddCart</button>}
        {showDeleteButton && <button onClick={onClick}>DeleteCart</button>}
      </div>
    </div>
  );
};

export default ProductCard;
