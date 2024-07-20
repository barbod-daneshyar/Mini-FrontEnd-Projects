import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";
import { useContext } from "react";
import Context from "./components/context";

const Shoppage = () => {
  const context = useContext(Context);
  return (
    <>
      <BrowserRouter>
        <Context.Provider value={context}>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
};

export default Shoppage;
