import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonials.css";

const testimonials = [
  {
    text: "This platform helped me connect with amazing philatelists around the country!",
    author: "Arun Sharma",
  },
  {
    text: "A brilliant initiative for collectors! The e-commerce system is smooth and efficient.",
    author: "Priya Malhotra",
  },
  {
    text: "Finally, a centralized philatelic database! This is a dream come true.",
    author: "Rajesh Kapoor",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What People Are Saying</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
