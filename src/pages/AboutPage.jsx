import React from "react";

import PageHero from "../components/PageHero";

import placeholder from "../assets/placeholder.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <section className="section-centre about-page">
        <article className="about-big">
          <img className="about-img" src={placeholder} alt="placeholder-img" />
          <div>
            <h2>Our Story</h2>
            <div className="underline"></div>

            <p>
              Introducing a rising star in the world of e-commerce, [Your Name].
              With an unwavering passion for innovation and a keen eye for
              trends, [Your Name] is set to revolutionize the online shopping
              experience. Armed with a natural flair for entrepreneurship and a
              deep understanding of customer needs, they are the driving force
              behind an exciting new start-up. Their creativity knows no bounds,
              constantly brainstorming unique ideas and concepts that captivate
              audiences. A natural problem-solver, [Your Name] is committed to
              delivering unparalleled customer satisfaction and building lasting
              relationships. Get ready to witness the birth of a visionary, as
              [Your Name] paves the way for the future of e-commerce.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
