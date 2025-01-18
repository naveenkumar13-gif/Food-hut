import React from "react";
import CartItem from "../Cart/CartItem";
function Cart() {
  return (
    <div className="mt-[100px]">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <CartItem />
        
      </div>
    </div>
  );
}

export default Cart;
