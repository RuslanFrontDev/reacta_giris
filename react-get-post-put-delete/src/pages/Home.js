import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Create from "./Create";
import Edit from "./Edit";

function App() {
  const [products, setProducts]=useState([])

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    axios("http://localhost:5000/api/products")
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <>
      <header>
        <div className="card">
          <div className="card-row">
            <h1>Home Product-list</h1>
            <Link to='/create'>Create-Link</Link>
          </div>
        </div>
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Product Img</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product=>(
                <tr key={product.id}>
                <td><img src={`http://localhost:5000/${product.productImage}`} width="100" height="52" alt={product.name}/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{String(product.featured)}</td>
                <td>
                  <Link to={`/edit/${product.id}`}>Edit</Link>
                  <button onClick={() => handleDelete(product.id)} className="delete">Delete</button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </>
  );
}

export default App;
