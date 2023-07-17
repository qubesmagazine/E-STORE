import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

const ProductCard = ({ images, slug, title, price, brand }) => {
  return (
    <Link to={`/products/${slug}`}>
      <div className="position-relative text-danger">



        <div className=" rounded-0 h-100 w-100 d-none d-lg-flex position-absolute top-0 hover-me">
        <Button
        className="w-100 rounded-0"
          size="lg"
          variant="danger"
        >
          VIEW PRODUCT
        </Button>
        </div>
        <div
          className="d-flex justify-content-center flex-column mb-0"
          style={{ height: "450px", width: "100%" }}
        >
          <Image
            src={images?.[0]}
            alt={title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <p>{formatCurrency(price)}</p>
        <div style={{ border: "1px solid red" }} />
        <Button
          className="w-100 rounded-0 d-lg-none"
          size="lg"
          variant="danger"
        >
          VIEW PRODUCT
        </Button>
        <p className="mb-0 fw-bold">{title}</p>
        <p className="small-0 fw-light">{brand}</p>
      </div>
    </Link>
  );
};

export default ProductCard;