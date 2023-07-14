import React from "react";

import { services } from "../utils/data";

const Services = () => {
  return (
    <section className="services-section">
      <article className="services-header section-centre">
        <h3>
          custom shop
          <br />
          built only for you
        </h3>
        <p>
          Experience an extraordinary online e-commerce shop designed
          exclusively for you, where personalized enchantment meets seamless
          technology for a truly exceptional shopping adventure.
        </p>
      </article>
      <div className="services-centre ">
        {services.map((service) => {
          const { id, text, icon, title } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
