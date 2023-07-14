import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="contact-content">
        <p>
          Unlock a world of exclusive offers, captivating content, and
          delightful surprises by joining our newsletter today. Stay connected
          and be inspired!
        </p>
        <form action="" className="contact-form">
          <input
            type="email"
            className="form-input"
            placeholder="enter email"
          />
          <button type="submit" className="submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
