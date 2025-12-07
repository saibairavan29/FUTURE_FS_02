import React from "react";
import Carousel from "react-bootstrap/Carousel";

const baseUrl = process.env.PUBLIC_URL || "";

const slides = [
  {
    id: 1,
    img: `${baseUrl}/images/banner1.jpg`
  },
  {
    id: 2,
    img: `${baseUrl}/images/banner2.jpg`
  },
  {
    id: 3,
    img: `${baseUrl}/images/banner3.jpg`
  }
];

export default function BannerCarousel() {
  return (
    <Carousel>
      {slides.map((item) => (
        <Carousel.Item key={item.id} interval={3000}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={`slide-${item.id}`}
            style={{
              maxHeight: "620px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Welcome to E-Shop</h3>
            <p>Discover top products & deals</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
