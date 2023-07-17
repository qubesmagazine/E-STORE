import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

const ImageSlider = ({ casualPicks }) => {
  const [current, setCurrent] = useState(0);
  const length = casualPicks.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(casualPicks) || casualPicks.length <= 0) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center mx-auto border border-danger img-contain mt-5">
      <BsArrowLeft className="left-arrow both-arrow" onClick={prevSlide} />
      <BsArrowRight className="right-arrow both-arrow" onClick={nextSlide} />
      {casualPicks.map((pick, index) => (
        <div key={index}>
          {index === current && (
            <div className="d-lg-flex align-items-center flex-row-reverse">
              <Link to={`/products/${pick.slug}`}>
                <div className="resizeA">
                  <Image
                    src={pick.images[0]}
                    alt={pick.title}
                    className="img-fluid mb-4 p-2"
                  />
                </div>
              </Link>
              <div className="px-2 mb-4 resize">
                <div className="text-danger fs-5 mt-4 mt-lg-0">
                  <p className="mb-0">{pick.title}</p>
                  <p className="small fw-light">{pick.brand}</p>
                </div>
                <p className="text-danger fs-5 mt-4 mt-lg-0">
                  {formatCurrency(pick.price)}
                </p>
                <Link to={`products/${pick.slug}`}>
                  <Button className="w-100 rounded" size="lg" variant='danger'>View Product</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;