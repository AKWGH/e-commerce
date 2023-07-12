import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="error-page">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link className="btn" to="/">
        back home
      </Link>
    </main>
  );
};

export default ErrorPage;
