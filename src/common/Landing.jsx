import React, { useState, useEffect, useRef } from 'react';
import holderImage1 from '../images/HolderImage1.jpg';
import holderImage2 from '../images/HolderImage2.jpg';
import holderImage3 from '../images/HolderImage3.jpg';
import './Landing.css';

export const Landing = () => {
  const images = [holderImage1, holderImage2, holderImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isFadingOut = useRef(false);

  const FADE_SECONDS = 2;
  const IMAGE_SECONDS = 7;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFadingOut.current) {
        setOpacity(0); // Start fade-out
        isFadingOut.current = true;

        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          // Introduce a very short delay before starting the fade-in
          setTimeout(() => {
            setOpacity(1); // Start fade-in
            isFadingOut.current = false;
          }, 50); // Adjust this delay if needed (milliseconds)
        }, FADE_SECONDS * 1000);
      }
    }, IMAGE_SECONDS * 1000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div id="landing-page">
        <div id="image-container">
          <img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Holder Image"
            id="landing-image"
            style={{
              opacity: opacity,
              transition: `opacity ${FADE_SECONDS}s ease-in-out`,
            }}
          />
          <div id="landing-text">
            <h1>Northern Colorado</h1>
            <div id="landing-headline-container">
              <h2 id="landing-headline">
              Be prepared for this next season with expertise you can trust.
              </h2>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};