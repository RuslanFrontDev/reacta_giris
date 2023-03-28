import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigation = useNavigate();
  const [state, setState] = useState({
    name: "",
    details: "",
    price: 0,
  });
  const changeHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const [previewImage, setPreviewImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, details, price } = state;
    const data = new FormData();
    data.append("name", name);
    data.append("details", details);
    data.append("price", Number(price));
    data.append("featured", featured);
    data.append("productImage", productImage);
    axios
      .post(`http://localhost:5000/api/products`, data)
      .then((res) => navigation("/"))
      .catch((err) => console.log(err));
  };
  const handleProductImage = (e) => {
    const image = e.target.files[0];
    if (image) {
      setProductImage(image);
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
    }
  };
  return (
    <div className="create">
      <div className="card">
        <form className="card-row" onSubmit={handleSubmit}>
          <h2>Create Product</h2>
          <label htmlFor="name">Name</label>
          <input
            onChange={changeHandle}
            value={state.name}
            type="text"
            name="name"
          />
          <label htmlFor="details">Details</label>
          <textarea
            onChange={changeHandle}
            value={state.details}
            id="details"
            name="details"
          />
          <label htmlFor="price">Price</label>
          <input
            onChange={changeHandle}
            value={state.price}
            type="number"
            id="price"
            name="price"
          />
          <label htmlFor="featured">Featured</label>
          <input
            name="featured"
            onChange={(e) => setFeatured(e.target.checked)}
            type="checkbox"
          />
          {previewImage && (
            <img className="preview-image" src={previewImage} alt="preview" />
          )}
          <label htmlFor="img">Select-image</label>
          <input
            onChange={handleProductImage}
            name="img"
            accept="image/png, image/jpeg"
            type="file"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
