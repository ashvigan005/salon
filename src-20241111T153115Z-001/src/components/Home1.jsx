import React, { useState, useEffect } from 'react';
import Salon1 from '../assets/hc1.jpg';
import salon2 from '../assets/hc2.jpg';
import salon3 from '../assets/hc3.jpg';




function Home1() {
  const images = [Salon1, salon2, salon3]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div style={{ width: '1900px', height: '831px' }} className="flex justify-center items-center bg-gray-100"> {/* Adjusted width and height */}
      <div className="relative h-full w-full">
        <img src={images[currentImageIndex]} alt="Slideshow" className="object-cover h-full w-full" />
      </div>
    </div>
  );
}

export default Home1;
