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
import { useNavigate } from "react-router-dom";

function CartItem() {
  const cart = useSelector((store) => store.cart.cart);
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            <p className="text-lg font-medium text-[#49557e]">$ {item.price}</p>
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
              ${item?.price * item?.quantity}
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
        <div className=" bg-[#323232] h-[50px] text-white text-xl flex items-center p-5  mt-6  ">
          <ul className="flex items-center gap-4">
            {/* <li>{cart.length} ordres</li> */}
            <li>{totalQuantity} ordres</li>
            <li className="flex gap-1">
              <span>$</span>
              {totalPrice}
            </li>
          </ul>
        </div>
      ) : (
        <p className=" flex items-center justify-center text-2xl text-slate-300 mt-10">
          It looks like your cart is empty. Time to fill it up with some
          delicious goodies! 🍔🍕🍰
        </p>
      )}

      {cart.length > 0 && (
        <div className="my-[50px] flex items-center justify-between gap-10">
          <div className="flex-grow flex flex-col gap-5">
            <h2 className="text-3xl font-medium">Cart Totals</h2>
            <div>
              <div className="flex justify-between text-[#555] my-3">
                <p>SubTotals</p>
                <p> ${totalPrice}</p>
              </div>
              <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              <div className="flex justify-between text-[#555] my-3">
                <p>Delivery Fees</p>
                <p>{2}</p>
              </div>
              <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              <div className="flex justify-between text-[#555] my-3">
                <p>Total</p>
                <p> ${totalPrice + 3}</p>
              </div>
              <hr className="h-[1px] bg-[#e2e2e2] border-none my-2" />
            </div>
            <button
              className="border-none text-white  bg-red-500 py-3 rounded w-[220px]"
              onClick={() => navigate("/order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="flex-1">
            <p className="text-[#555]">
              if you have a <span className="text-xl">Promo Code</span> Enter it
              here...
            </p>
            <div className="mt-3 flex justify-between items-center bg-[#eaeaea] rounded">
              <input
                type="text"
                placeholder="WELCOME10"
                className="bg-transparent border-none outline-none px-2 my-1"
              />
              <button className="w-[150px] py-3 px-1 border-none text-white rounded bg-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]
export default CartItem;
