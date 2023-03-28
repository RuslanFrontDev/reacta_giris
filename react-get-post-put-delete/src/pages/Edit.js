import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigation = useNavigate();
  const { productId } = useParams();
  const [state, setState] = useState({
    name: "",
    details: "",
    price: 0,
  });
  const [previewImage, setPreviewImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const changeHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, details, price } = state;
    const data = new FormData();
    data.append("name", name);
    data.append("details", details);
    data.append("price", price);
    data.append("featured", featured);
    data.append("productImage", productImage);

    axios
    .put(`http://localhost:5000/api/products/${productId}`, data)
    .then((res) => navigation(`/products/${productId}`))
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
  useEffect(() => {
    axios(`http://localhost:5000/api/products/${productId}`)
      .then((res) => {
        setState({
          name: res.data.name,
          details: res.data.details,
          price: res.data.price,
        });
        setFeatured(res.data.featured);
        setPreviewImage(`http://localhost:5000/${res.data.productImage}`);
      })
      .catch((err) => console(err));
  }, [productId]);
  return (
    <div className="edit">
      <div className="card">
        <form className="card-row" onSubmit={handleSubmit}>
          <h2>Edit Product</h2>
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

export default Edit;
