import React from "react";
import { useGlobalContext } from "../context";

const Items = () => {
  const { data } = useGlobalContext();

  return (
    <div className="">
      <h3 className="title">cocktail</h3>
      <div className="product-main-con">
        {data.map((item, i) => {
          const { strDrinkThumb, strAlcoholic, strGlass, strIngredient1} = item
          return (
            <div className="card" key={i}>
              <img
                src={strDrinkThumb}
                alt="product image"
                className="card-image"
              />
              <div className="detail-con">
                <h3 className="card-title">{strIngredient1}</h3>
                <p className="drink-description">{strGlass}</p>
                <p className="drink-type">{strAlcoholic}</p>
                <button className="btn">DETAILS</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
