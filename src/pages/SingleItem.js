import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";

const SingleItem = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSingleItem() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const respData = await response.json();
        setCocktail(respData.drinks);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleItem();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="single-main-con">
      {cocktail.map((item, index) => {
        const {
          strDrinkThumb,
          strGlass,
          strIngredient1,
          strInstructions,
          strDrink,
          strCategory,
          strAlcoholic,
        } = item;

        return (
          <div>
            <h2 className="title">{strDrink}</h2>
            <div className="single-item-con" key={index}>
            <div className="single-image-con">
              <img src={strDrinkThumb} className="single-image" />
            </div>
            <div className="single-item-detail">
              <div>
                <span className="item-label">Name :</span>
                <span>{strDrink}</span>
              </div>
              <div>
                <span className="item-label">Category :</span>
                <span>{strCategory}</span>
              </div>
              <div>
                <span className="item-label">Info :</span>
                <span>{strAlcoholic}</span>
              </div>
              <div>
                <span className="item-label">Glass :</span>
                <span>{strGlass}</span>
              </div>
              <div>
                <span className="item-label">Instruction :</span>
                <span>{strInstructions}</span>
              </div>
              <div>
                <span className="item-label">Ingredient :</span>
                <span>{strIngredient1}</span>
              </div>
            </div>
          </div>
            
          </div>
          
        );
      })}
    </div>
  );
};

export default SingleItem;
