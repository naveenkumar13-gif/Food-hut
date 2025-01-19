import React from "react";
import { getTotalPrice } from "../../Store/CartSlice";
import { useSelector } from "react-redux";

function PlaceOrder() {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div>
      <form className="flex items-start justify-between gap-4 mt-[100px]">
        <div className="w-full max-w-[500px]">
          <p className="text-4xl font-light mb-7">Delivery Informations </p>
          <div className="flex gap-2">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="street" />
            <div className="flex gap-2">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Zip code" />
              <input type="text" placeholder="countery" />
            </div>
            <input type="text" placeholder="Phone" />
          </div>
          <div></div>
        </div>
        <div className="w-full max-w-[500px]">
          <div className="flex-grow flex flex-col gap-5">
            <h2 className="text-3xl font-medium">Cart Totals</h2>
            <div>
              <div className="flex justify-between text-[#555] items-center my-3">
                <p>SubTotals</p>
                <p> ${totalPrice}</p>
              </div>
              <hr className="h-[1px] bg-[#e2e2e2] border-none " />
              <div className="flex justify-between items-center text-[#555] my-3">
                <p>Delivery Fees</p>
                <p>{2}</p>
              </div>
              <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              <div className="flex justify-between text-[#555] items-center my-3">
                <p>Total</p>
                <p> ${totalPrice + 3}</p>
              </div>
              <hr className="h-[1px] bg-[#e2e2e2] border-none my-2" />
            </div>
            <button className="border-none text-white  bg-red-500 py-3 rounded w-[220px]">
              PROCEED TO Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
