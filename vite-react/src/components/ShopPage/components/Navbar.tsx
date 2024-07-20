import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "./context";

const Navbar = () => {
  const { status } = useContext(Context);
  function handleClick(){
    
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <div className="ps-4">
          <Link className="fw-bold display-6 text-decoration-none" to="#">
            MyShop
          </Link>
        </div>
        <div className="navbar d-flex flex-column align-items-start pe-4 gap-1">
          <small>Total Item: {}</small>
          <small>Total Price: {}</small>
          <button
            className="btn btn-success my-2 my-sm-0"
            type="button"
            onClick={handleClick}
          >
            {status === "cartpage" ? "View Cart" : "View Products"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
