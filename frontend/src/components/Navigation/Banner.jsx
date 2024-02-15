import { useState, useEffect } from 'react';
import './Banner.css'; 

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://www.chrislovesjulia.com/wp-content/uploads/2018/07/Screen-Shot-2018-07-15-at-11.13.14-PM.png",
    "https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png",
    "https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevSlide = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="banner-container">
      <img src={images[currentImageIndex]} alt="Amazon Logo" className="bannerimg" />
      <div className="banner-carousel">
        {/* Image carousel content goes here */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={`carousel-banner ${
              index === currentImageIndex ? 'active' : ''
            }`}
          />
        ))}
        <div className="dots-container">
          {/* Generating dot elements */}
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <div id="prev-button" onClick={goToPrevSlide}>
          &#10094;
        </div>
        <div id="next-button" onClick={goToNextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Banner;



