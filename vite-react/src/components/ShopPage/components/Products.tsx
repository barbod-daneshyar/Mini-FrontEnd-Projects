// import { products, status } from "../types";
import data from "../data/products.json";
import Product from "./Product";
// import { useContext } from 'react';
// import Context from "./context";

const Products = () => {
  // const {status} = useContext(Context)
  return (
    <div className={`g-0 row justify-content-start`}>
      {data.map((p, index) => {
        return (
          <Product name={p.name} photo={p.photo} price={p.price} key={index} />
        );
      })}
    </div>
  );
};

export default Products;
