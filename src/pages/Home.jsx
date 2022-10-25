import React from "react";
import {  Outlet, useNavigate } from "react-router-dom";

const Home = () => {

  const navigate=useNavigate()
  return (
    <div className="div">
   
    WELCOM TO MY PAGE 🌎
      <div className="button">
        <button
          className="btn"
          onClick={() => navigate("") }
        >
          Anka kuşu
        </button>
        <button
          className="btn"
          onClick={() => navigate("anka1")}
        >
          Blue Anka
        </button>
      </div>
         <Outlet />
    </div>
  );
};

export default Home;