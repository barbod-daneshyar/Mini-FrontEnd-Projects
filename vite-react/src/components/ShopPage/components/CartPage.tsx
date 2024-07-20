import Products from "./Products";
import Context from "./context";
import { useContext } from "react";


const CartPage = () => {
  const context = useContext(Context);
  return (
    <>
      <Context.Provider value={{ ...context, status: "cartpage" }}>
        <Products />
      </Context.Provider>
    </>
  );
};

export default CartPage;
