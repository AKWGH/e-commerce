import React from "react";

import placeholder from "../assets/placeholder.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="section-centre hero-main-big">
      <article className="main-hero-content">
        <h1>
          Inspire Shop <br />
          Transform Repeat
        </h1>
        <p>
          Endless inspiration, where every purchase fuels your journey of
          personal growth and positive change.
        </p>
        <Link to="/products" className="btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img className="hero-main-img" src={placeholder} alt="placeholder" />
        <img className="hero-small-img" src={placeholder} alt="placeholder" />
      </article>
    </main>
  );
};

export default Hero;
