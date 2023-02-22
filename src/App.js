import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleItem from "./pages/SingleItem";
import SharedProductLayout from "./components/SharedProductLayout";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cocktail" element={<SharedProductLayout />}>
          <Route path=":id" element={<SingleItem />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error/>}/>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
