import Products from "./Products";
import Context from "./context";
import { useContext } from "react";

const ShopPage = () => {
  const context = useContext(Context);
  return (
    <>
      <Context.Provider value={{ ...context, status: "shoppage" }}>
        <Products />
      </Context.Provider>
    </>
  );
};

export default ShopPage;
