import React from "react";
import Carousel from "react-bootstrap/Carousel";

const bannerImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg"
];

export default function BannerCarousel() {
  return (
    <Carousel>
      {bannerImages.map((url, idx) => (
        <Carousel.Item key={idx} interval={3000}>
          <img className="d-block w-100" src={url} alt={`slide-${idx}`} style={{ maxHeight: "620px", objectFit: "cover" }} />
          <Carousel.Caption>
            <h3>Welcome to E-Shop</h3>
            <p>Discover top products & deals</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
