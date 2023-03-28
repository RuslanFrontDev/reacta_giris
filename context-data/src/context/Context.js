import CartsBrand from "../carts.json";

const { createContext, useState, useContext } = require("react");

 const Context = createContext()

function CartProvider({children}){
   let shopping = [];
   Object.keys(CartsBrand).map((card) => shopping.push(CartsBrand[card]));
   const [things, setThings] = useState(shopping);
   const [cartShops, setCartShopps] = useState([]);
   const addCartShopps=(id, imageUrl, description, price, productName,quantity)=>{
      const checkBasket=cartShops.find(cart=>cart.id===id)
      // if(checkBasket){
      //    const getNonExisting=cartShops.filter(item=>item.id!==checkBasket.id)
      //    setCartShopps([...getNonExisting, {...checkBasket, quantity:checkBasket.quantity+1}])
      // }else{
      //    setCartShopps([...cartShops, {id, imageUrl, description, price, productName,quantity:1}])

      // }
      if(checkBasket){
         checkBasket.quantity+=1
         setCartShopps([...cartShops.filter(item=>item.id!==id), checkBasket])
      }else{
         setCartShopps([...cartShops,{
            id:id,
            price:price,
            imageUrl:imageUrl,
            quantity:1
         }])
      }
    
   };
   const deleteCart=(id)=>{
      const filterData=cartShops.filter(shops=>shops.id!==id)
      setCartShopps(filterData)
      // console.log(filterData);
   }

   const data={
      things,
      setThings,
      cartShops,
      addCartShopps,
      deleteCart
   }



   return(
      <Context.Provider value={data}>
         {children}
      </Context.Provider>
   )
  
}
export const useSite = () => useContext(Context);

export default CartProvider