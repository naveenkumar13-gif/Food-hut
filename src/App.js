import React, { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar/index";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

import Login from "../src/components/Login/index";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {login ? (
        <Login setLogin={setLogin} />
      ) : (
        <>
          <div className="w-[80%] m-auto ">
            <NavBar setLogin={setLogin} />
            <Routes>
              <Route path="/" element={<Home login={login} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
            </Routes>
          </div>
         
        </>
      )}
    </>
  );
}

export default App;
