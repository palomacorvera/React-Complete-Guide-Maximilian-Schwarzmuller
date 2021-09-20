import React, {useState} from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import CartProvider from "./store/CartProvider";

function App() {
  const [visibility, setVisibility] = useState(false);

  const showCartHandler = () => {
    setVisibility(true);
  };

  const hideCartHandler = () => {
    setVisibility(false);
  }

  return (
    <CartProvider>
      {visibility && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
