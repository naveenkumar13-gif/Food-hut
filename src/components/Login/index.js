import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

function Index({ setLogin }) {
  const [current, setCurrent] = useState("sign up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div
      className=" absolute z-10 w-full h-full bg-[#00000090] backdrop-blur-sm grid"
      data-aos="fade"
    >
      <form
        className="self-center justify-self-center w-[400px] flex flex-col justify-center gap-6 bg-white text-[#808080] py-6 px-8 rounded-lg text-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center text-black">
          <h2>{current}</h2>
          <img
            src={assets.cross_icon}
            alt="cross_icon"
            onClick={() => setLogin(false)}
            className="w-[16px ] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          {current === "sign up" && (
            <input
              placeholder="Your name"
              required
              type="text"
              className="outline-none border border-[#c9c9c9c9] p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            placeholder="Your Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border border-[#c9c9c9c9] p-2 rounded"
          />
          <input
            placeholder="Your Password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none border border-[#c9c9c9c9] p-2 rounded"
          />
        </div>
        <button className="border-none p-3 rounded text-white bg- bg-red-500 text-lg">
          {current === "sign up" ? "create Account" : "login"}
        </button>
        <div className="flex items-start gap-2">
          <input required type="checkbox" />
          <p className=" -mt-2">
            By counting ,i agree to the terms of use & privacy policy{" "}
          </p>
        </div>
        {current === " login" ? (
          <p>
            create a new account ?{" "}
            <span
              onClick={() => setCurrent("sign up")}
              className="cursor-pointer text-red-500 font-medium"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have Account ?{" "}
            <span
              onClick={() => setCurrent("login")}
              className="cursor-pointer text-red-500 font-medium"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Index;
