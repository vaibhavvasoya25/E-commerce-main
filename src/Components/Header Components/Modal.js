import React, { useContext } from "react";
import { cartProduct } from "../Body Components/Content";

const Modal = () => {
  const { cart, setCart } = useContext(cartProduct);

  const deleteItem = (id) => {
    console.log({ cart, id });
    const NewArray = cart.filter((items) => items.id !== id);
    console.log("newArray", NewArray);
    setCart(NewArray);
  };

  function orderDone() {
    alert("Ordered Successfully.");
  }
  return (
    <>
      <div
        style={{ opacity: "0.9" }}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div
              style={{ backgroundColor: "black", color: "white" }}
              className="modal-header"
            >
              <h1
                style={{ backgroundColor: "black" }}
                className="modal-title fs-5"
                id="exampleModalLabel"
              >
                <span style={{ backgroundColor: "black", color: "white" }}>
                  Total Amount : ${" "}
                  <b style={{ color: "red", backgroundColor: "black" }}>0</b>
                </span>
              </h1>
              <button
                style={{ backgroundColor: "white" }}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              style={{ backgroundColor: "white", color: "black" }}
              className="modal-body"
            >
              <table className="table table-bordered border-light table-striped">
                {cart &&
                  cart.map((product, i) => (
                    <>
                      <tbody style={{ fontSize: "large" }}>
                        <tr
                          className="table-primary table-bordered border-light table-striped"
                          key={i + 1}
                        >
                          <th scope="row">{i + 1}</th>
                          <td>
                            <img
                              style={{ height: "40px", width: "40px" }}
                              src={product.image}
                              alt="img not found"
                            />
                          </td>
                          <td>{product.title}</td>
                          <td style={{ color: "green" }}>${product.price}</td>
                          <td>
                            <button
                              onClick={() => deleteItem(product.id)}
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))}
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-success"
                onClick={orderDone}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
