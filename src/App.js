import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem" 

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">
      <div>
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
        }}/> // replace with BakeryItem component
      ))}

    </div>

      <div>
        <h2>Cart</h2>
        <p>Total: ${total}</p>
        {/* TODO: render a list of items in the cart */}
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
