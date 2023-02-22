import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      const drinks = response.data.drinks
      if(drinks){
        setData(drinks);
      }else{
        setData([])
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        search,
        setSearch,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
