import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../Store/CartSlice";
import { assets } from "../../assets/frontend_assets/assets";

function CartItem() {
  const cart = useSelector((store) => store.cart.cart);
  const Price = useSelector((store) =>
    store.cart.cart.reduce((sum, curr) => sum + curr, 0)
  );
  const dispatch = useDispatch();
  return (
    <div>
      {cart.map((item, index) => (
        <div key={item.id}>
          <div
            className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-4 mt-8 "
            key={item.image}
          >
            <div className="w-1/2 mb-4">
              <img src={item.image} alt="Cart_image" />
            </div>
            <p>{item.name}</p>
            <p> {item.price}</p>
            <div className=" w-[15%] flex items-center gap-3 my-2 ">
              <img src={assets.remove_icon_red} alt="assest_remove" />
              <p>{item.quantity}</p>
              <img src={assets.add_icon_green} alt="assest_add" />
            </div>

            <p>{item?.price * item.quantity}</p>
            <p
              className="cursor-pointer"
              onClick={() => dispatch(deleteItem(item.id))}
            >
              x
            </p>
          </div>
          <hr className="h-[1px] bg-[#e2e2e2] border-none" />
        </div>
      ))}
      <div className=" bg-[#323232] h-[50px] text-white text-xl flex items-center p-4">
        <ul>
          <li>{cart.length} ordres</li>
        </ul>
      </div>
    </div>
  );
}
// grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]
export default CartItem;
