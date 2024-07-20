import { useContext } from "react";
import { productInfo } from "../types";
import Context from "./context";
import { MdCancel } from "react-icons/md";

const Product = ({ name, photo, price }: productInfo) => {
  const { status } = useContext(Context);
  return (
    <div
      className={`${
        status === "cartpage"
          ? "col-12 d-flex align-items-start justify-content-around py-3"
          : "col-4"
      } text-center`}
    >
      <h4 className={status === "cartpage" ? "w-25" : ""}>{name}</h4>
      <img
        src={photo}
        alt={`photo of ${name}`}
        style={{
          width: `${status === "cartpage" ? "10rem" : "50%"}`,
          height: `${status === "cartpage" ? "10rem" : "50%"}`,
        }}
      />
      <p className={status === "cartpage" ? "w-25" : ""}>{price + "$"}</p>
      {status === "shoppage" ? (
        <button className="btn btn-outline-primary" onClick={() => {}}>
          Add to Cart
        </button>
      ) : (
        <>
          <select className="p-2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <MdCancel size="2rem" className="text-danger" />
        </>
      )}
    </div>
  );
};

export default Product;
