import React, { useEffect, useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section className="t">
      <img className="main-image" src={mainImage.url || ""} alt="main image" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              onClick={() => setMainImage(images[index])}
              className={`${
                image.url === mainImage.url ? "gallery-active" : null
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
