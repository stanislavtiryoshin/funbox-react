import React, { useState } from "react";
import "./ProductCard.scss";

const ProductCard = ({
  id,
  available,
  product,
  features,
  info,
  addProduct,
  deleteProduct,
  added,
  weight,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className={`product_card-wrap ${
          available ? "available" : "unavailable"
        } ${isAdded ? "added" : ""}`}
      >
        <div
          className="product_card"
          onMouseEnter={() => {
            if (isAdded) setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={() => {
            setIsAdded(!isAdded);
            !isAdded ? addProduct(id) : deleteProduct(id);
          }}
        >
          <div className="card_top">
            {isHovered ? (
              <span className="hovered">Котэ не одобряет?</span>
            ) : (
              "Сказочное заморское яство"
            )}
          </div>
          <div className="card_name">Нямушка</div>
          <div className="card_prod">{product}</div>
          <div className="card_desc">
            {features.map((feat) => {
              return <span>{feat}</span>;
            })}
          </div>
          <div className="card_weight">
            {weight} <span>кг</span>
          </div>
        </div>
        {available ? (
          isAdded ? (
            <div className="card_info">{info}</div>
          ) : (
            <div className="card_info">
              Чего сидишь? Порадуй котэ,
              <button
                onClick={() => {
                  setIsAdded(!isAdded);
                  !isAdded ? addProduct(id) : deleteProduct(id);
                }}
              >
                купи.
              </button>
            </div>
          )
        ) : (
          <div className="card_info">Печалька, {product} закончился.</div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
