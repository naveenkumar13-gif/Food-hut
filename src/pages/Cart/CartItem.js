import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  deleteItem,
  getTotalPrice,
  getTotalQuantity,
  increaceItem,
} from "../../Store/CartSlice";
import { assets } from "../../assets/frontend_assets/assets";

function CartItem() {
  const cart = useSelector((store) => store.cart.cart);
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.map((item, index) => (
        <div key={item.id}>
          <div
            className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-4 mt-8 "
            key={item.image}
          >
            <div className=" mb-4">
              <img
                src={item.image}
                alt="Cart_image"
                className="w-full h-full"
              />
            </div>
            <p className="text-lg font-medium text-[#49557e]">{item.name}</p>
            <p className="text-lg font-medium text-[#49557e]"> {item.price}</p>
            <div className=" w-[15%] flex items-center gap-3 my-2 cursor-pointer ">
              {
                <>
                  <img
                    src={assets.remove_icon_red}
                    alt="assest_remove"
                    onClick={() => dispatch(decreaseItem(item.id))}
                  />
                  <p className="text-lg font-medium text-[#49557e]">
                    {item.quantity}
                  </p>
                  <img
                    src={assets.add_icon_green}
                    alt="assest_add"
                    onClick={() => dispatch(increaceItem(item.id))}
                  />
                </>
              }
            </div>

            <p className="text-lg font-medium text-[#49557e]">
              {item?.price * item?.quantity}
            </p>
            <p
              className="cursor-pointer bg-red-600 text-center  text-[#36454F] rounded-lg py-2 hover:bg-red-500 duration-500"
              onClick={() => dispatch(deleteItem(item.id))}
            >
              delete
            </p>
          </div>
          <hr className="h-[1px] bg-[#e2e2e2] border-none" />
        </div>
      ))}
      {cart.length > 0 ? (
        <div className=" bg-[#323232] h-[50px] text-white text-xl flex items-center p-5 justify-between mt-6  ">
          <ul className="flex items-center gap-4">
            {/* <li>{cart.length} ordres</li> */}
            <li>{totalQuantity} ordres</li>
            <li className="flex gap-1">
              <span>$</span>
              {totalPrice}
            </li>
          </ul>
          <p>open cart</p>
        </div>
      ) : (
        <p className=" flex items-center justify-center text-2xl text-slate-300 mt-10">
          It looks like your cart is empty. Time to fill it up with some
          delicious goodies! 🍔🍕🍰
        </p>
      )}
    </div>
  );
}
// grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]
export default CartItem;
