import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Items = () => {
  const { data, findItem, isLoading } = useGlobalContext();

  if(isLoading){
    return <Loading/>
  }

  if(data.length < 1){
    return <h2 className="title">No cocktail matched your search</h2>
  }
  
  return (
    <div className="">
      <h2 className="title">cocktail</h2>
      <div className="product-main-con">
        {data.map((item, i) => {
          const {
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strIngredient1,
            idDrink,
            strDrink,
          } = item;
          return (
            <div className="card" key={i}>
              <img
                src={strDrinkThumb}
                alt="product image"
                className="card-image"
              />
              <div className="detail-con">
                <h3 className="card-title">{strDrink}</h3>
                <p className="drink-description">{strGlass}</p>
                <p className="drink-type">{strAlcoholic}</p>
                <button className="btn">
                  <Link
                    to={`cocktail/${idDrink}`}
                    onClick={() => findItem(item.idDrink)}
                  >
                    DETAILS
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
