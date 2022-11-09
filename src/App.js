import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  
  return (
    <div className="Root">
      <div className="App">
        <h1>My Bakery</h1> 
        {/*map bakeryData to BakeryItem components*/ bakeryData.map((item, index) => ( 
          <BakeryItem
            name={item.name}
            description={item.description}
            picture={item.image}
            price={item.price}
            addToCart={() => {
              setCart((prevCart) => {
                const newCart = { ...prevCart };
                newCart[index] = (newCart[index] || 0) + 1;
                return newCart;
              });
            }}
          />
        ))}
        
      </div>
      <div className="Cart">
        <h2>Cart</h2>
        {/* render a list of items in the cart*/
        Object.entries(cart).length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            <ul>
              {Object.entries(cart).map(([index, quantity]) => {
                const item = bakeryData[Number(index)];
                return (
                  <ol key={index}>
                    {quantity} x {item.name}
                  </ol>
                );
              })}
            </ul>
            <p>
              Total: $
              {Object.entries(cart).reduce((total, [index, quantity]) => {
                const item = bakeryData[Number(index)];
                return Number((total + item.price * quantity).toFixed(2));
              }, 0)}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
