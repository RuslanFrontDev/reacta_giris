import { Link } from "react-router-dom";
import { useSite } from "../context/Context";

function Header() {
  const {cartShops}=useSite()
  const sumAllCartShops=cartShops.map(item=>item.quantity * item.price)
  const sumPrice=sumAllCartShops.reduce((prev,current)=>{
    return prev + current
  },0)
  const sumQuantity=cartShops.map(item=>item.quantity)
  const allQuantity=sumQuantity.reduce((prev,current)=>{
    return prev + current
  },0)
  return (
    <>
      <div className="header">
        <div className="container">
          <header className="links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/cart">
               Cart {allQuantity} Summary {sumPrice}
               <ul className="dropdown">
                  <li><Link className="pics" to='/picture'>Pics</Link></li>
                  <li>salam</li>
                  <li>salam</li>
               </ul>
            </Link>
            <Link className="link" to="/create">Create</Link>
          </header>
        </div>
      </div>
    </>
  );
}
export default Header;
