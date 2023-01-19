import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";

import { CardsList } from "./CardsList";

import "./Cards.scss";

const Cards = () => {
  const [added, setAdded] = useState([]);
  useEffect(() => {
    console.log(added);
  }, []);
  const addProduct = (prodId) => {
    setAdded((current) => [...current, prodId]);
  };
  const deleteProduct = (prodId) => {
    const filteredAdded = added.filter((prod) => prod !== prodId);
    setAdded(filteredAdded);
  };
  return (
    <section className="cards_section">
      <div className="container">
        <div className="cards_wrapper wrapper">
          {CardsList.map((card) => {
            return (
              <ProductCard
                addProduct={addProduct}
                deleteProduct={deleteProduct}
                id={card.id}
                available={card.available}
                product={card.product}
                features={card.features}
                info={card.info}
                added={added.includes(card.id)}
                weight={card.weight}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
