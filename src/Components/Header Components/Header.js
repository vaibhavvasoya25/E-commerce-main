import React, { useContext } from "react";
import Cart from "./Cart";
import Symbol from "./Symbol";
import { cartProduct } from "../Body Components/Content";

const Header = () => {
  const { cart, setCart } = useContext(cartProduct);

  return (
    <>
      <cartProduct.Provider value={{ cart, setCart }}>
        <div className="header-container">
          <div className="header">
            <Symbol />
            <Cart value={cart.length} />
          </div>
          <hr />
        </div>
      </cartProduct.Provider>
    </>
  );
};

export default Header;
