import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
function Home() {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('http://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
  },[])
  return (
    <>
      <div className="table">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Date Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product=>(
                <tr key={product.id}>
                   <td>{product.id}</td>
                <td>
                  {product.title}
                </td>
                <td>
                 {product.description.slice(0,55)}...
                </td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/details/${product.id}`}>
                    <VisibilityIcon />
                  </Link>
                  <Link to={`/details-data/${product.id}`}>
                    <DeleteIcon className="delete" />
                  </Link>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Home;
