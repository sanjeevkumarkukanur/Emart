import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container text-success">
            <h5 className="card-title  display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
