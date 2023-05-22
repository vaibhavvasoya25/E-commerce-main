import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
import Title from "./Title";
import Price from "./Price and Rate/Price";
import Header from "../Header Components/Header";
import Modal from "../Header Components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
export const cartProduct = createContext();

const Content = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(para) {
    const temp = [...cart];
    temp.push(para);
    setCart(temp);
    console.log({ cart });
  }

  function handleClick() {}
  return (
    <>
      <cartProduct.Provider value={{ cart, setCart }}>
        <Header />
        <section className="items">
          {!!products && products.length > 0 ? (
            products.map((product, i) => {
              return (
                <>
                  <div key={product.id} className="content">
                    <Card
                      body
                      color="dark"
                      style={{
                        width: "22rem",
                      }}
                    >
                      <CardSubtitle className="mb-2 text-muted" tag="h5">
                        {product.category}
                      </CardSubtitle>
                      <Image value={product.image} />
                      <CardBody>
                        <Title value={product.title} />
                        <Price
                          value1={product.price}
                          value2={product.rating.rate}
                        />

                        <Button
                          onClick={() => handleSubmit(product)}
                          block
                          color="success"
                        >
                          Add To Cart
                        </Button>
                        <hr />

                        <div>
                          <Button
                            id="UncontrolledPopover"
                            type="button"
                            color="warning"
                            block
                            onClick={(e) =>
                              handleClick({
                                ...product,
                                title: e.target.value,
                                description: e.target.value,
                              })
                            }
                          >
                            Description
                          </Button>
                          <UncontrolledPopover
                            placement="bottom"
                            target="UncontrolledPopover"
                          >
                            <PopoverHeader style={{ backgroundColor: "black" }}>
                              <div
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                onChange={handleClick}
                              >
                                {product.title}
                              </div>
                            </PopoverHeader>
                            <PopoverBody>
                              <div
                                style={{ color: "white" }}
                                onChange={handleClick}
                              >
                                {product.description}
                              </div>
                            </PopoverBody>
                          </UncontrolledPopover>
                        </div>

                        {/* Modal....................................  */}
                        <Modal
                          value={[product.id, product.title, product.price]}
                        />
                      </CardBody>
                    </Card>
                  </div>
                </>
              );
            })
          ) : (
            <p>API did not provided any product, try again.</p>
          )}
        </section>
      </cartProduct.Provider>
    </>
  );
};

export default Content;
