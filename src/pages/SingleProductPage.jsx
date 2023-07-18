import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { single_product_url } from "../utils/data";
import { formatPrice } from "../utils/helpers";

import ProductImages from "../components/ProductImages";

import PageHero from "../components/PageHero";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { useProductsContext } from "../contexts/products_context";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading,
    single_product_error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, []);

  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, []);

  if (single_product_loading) {
    return <Loading />;
  }
  if (single_product_error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = single_product;

  return (
    <main className="single-product-page">
      <PageHero title={name} />
      <div className="section-centre single-product-section">
        <Link className="btn" to="/products">
          backto products
        </Link>
        <div className="products-centre">
          <ProductImages images={images} />
          <section className="single-product-content">
            <h2>{name}</h2>
            <Stars reviews={reviews} stars={stars} />
            <h5 className="single-product-price">{formatPrice(price)}</h5>
            <p>{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart single_product={single_product} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
