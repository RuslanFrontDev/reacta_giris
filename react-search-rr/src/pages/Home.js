import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const filteredData=products.filter((product)=>{
    return product.category.toLowerCase().includes(category.toLowerCase())
  })

  return (
    <>
      <input
        type="search"
        placeholder="axtar"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <pre>{JSON.stringify(category, null)}</pre>
      <main className="bazar">
        {filteredData.map((product) => (
          <div className="card-app" key={product.id}>
            <div className="card-row">
              <div className="degrees">
                <div className="rate">{`Rate:${product.rating.rate}`}</div>
                <div className="price">{`Price:${product.price}`}</div>
                <div className="count">{`Count:${product.rating.count}`}</div>
              </div>
              <div className="title">
                <h1>{ product.category}</h1>
              </div>
              <div className="images">
                <img src={product.image} />
              </div>
              <div className="description">
                <h4>{product.description}</h4>
                <div className="coment-visibility">
                  <Link to={`/details/${product.id}`}>
                    <VisibilityIcon />
                  </Link>
                  <Link to="/coment">
                    <CommentIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
export default Home;

//https://fakestoreapi.com/

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// //icon
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CommentIcon from "@mui/icons-material/Comment";
// function Home() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => setProducts(res.data));
//   }, []);
//   const [filterData, setFilterData] = useState(products);

//   const searchHandleChange = (e) => {
//     const filteredData = products.filter((userInfo) => {
//      return  userInfo.category.toString().toLowerCase().includes(e.target.value.toString().toLowerCase())
//     })
//     setFilterData(filteredData)
//   }
//   return (
//     <>
//     <div className="search-div">
//       <input className="search-input" onChange = {searchHandleChange} type='search' placeholder="məhsullarınızı axtarın"/>
//     </div>
//       <main className="bazar">
//         {filterData.map((product) => (
//           <div className="card-app" key={product.id}>
//             <div className="card-row">
//               <div className="degrees">
//                 <div className="rate">{`Rate:${product.rating.rate}`}</div>
//                 <div className="price">{`Price:${product.price}`}</div>
//                 <div className="count">{`Count:${product.rating.count}`}</div>
//               </div>
//               <div className="title">
//                 <h1>{product.category}</h1>
//               </div>
//               <div className="images">
//                 <img src={product.image} />
//               </div>
//               <div className="description">
//                 <h4>{product.description}</h4>
//                 <div className="coment-visibility">
//                   <Link to={`/details/${product.id}`}>
//                     <VisibilityIcon />
//                   </Link>
//                   <Link to="/coment">
//                     <CommentIcon />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>
//     </>
//   );
// }
// export default Home;

//https://fakestoreapi.com/
