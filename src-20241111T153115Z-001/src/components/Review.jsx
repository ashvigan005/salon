import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hr5 from '../assets/hcc.jpg';
import Hr2 from '../assets/Fmask.jpg';
import Hr3 from '../assets/wa.jpg';

const Review = () => {
  const navigate = useNavigate(); 
  const rating = 4; 
  const [hoveredReview, setHoveredReview] = useState(null);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  const handleClick = (id) => {
    navigate('/appointment'); 
  };

  return (
    <div className="relative" style={{ overflowX: 'hidden', paddingBottom: '100px', marginTop: '100px' }}> 
      <div id="reviewContainer" className="flex">
        <div
          className="bg-white p-8 rounded-lg shadow-lg mr-4 w-1/3 flex flex-col justify-center items-center review"
          onMouseEnter={() => setHoveredReview(1)}
          onMouseLeave={() => setHoveredReview(null)}
          onClick={() => handleClick(1)}
          style={{ transition: 'transform 0.3s ease', transform: hoveredReview === 1 ? 'scale(1.05)' : 'scale(1)', height: '500px', cursor: 'pointer' }}
        >
          <div className="flex items-center mb-4">
            {renderStars()}
          </div>
          <h1 className="text-3xl font-semibold mb-4 text-center">Haircut</h1>
          <p className="mb-4 text-center">Discover a haven of style and care, where our talented team delivers <br />impeccable haircuts tailored to your unique look.</p>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={Hr5} alt="Product" className="w-full h-full object-cover" />
          </div>
        </div>

        <div
          className="bg-white p-8 rounded-lg shadow-lg mr-4 w-1/3 flex flex-col justify-center items-center review"
          onMouseEnter={() => setHoveredReview(2)}
          onMouseLeave={() => setHoveredReview(null)}
          onClick={() => handleClick(2)}
          style={{ transition: 'transform 0.3s ease', transform: hoveredReview === 2 ? 'scale(1.05)' : 'scale(1)', height: '500px', cursor: 'pointer' }}
        >
          <div className="flex items-center mb-4"> 
            {renderStars()}
          </div>
          <h1 className="text-3xl font-semibold mb-4 text-center">Facial</h1>
          <p className="mb-4 text-center">Rejuvenate and revitalize your skin with our range of customized facials,<br /> designed to leave you glowing with renewed radiance.</p>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={Hr2} alt="Product" className="w-full h-full object-cover" />
          </div>
        </div>

        <div
          className="bg-white p-8 rounded-lg shadow-lg w-1/3 flex flex-col justify-center items-center review"
          onMouseEnter={() => setHoveredReview(3)}
          onMouseLeave={() => setHoveredReview(null)}
          onClick={() => handleClick(3)}
          style={{ transition: 'transform 0.3s ease', transform: hoveredReview === 3 ? 'scale(1.05)' : 'scale(1)', height: '500px', cursor: 'pointer' }}
        >
          <div className="flex items-center mb-4"> 
            {renderStars()}
          </div>
          <h1 className="text-3xl font-semibold mb-4 text-center">Waxing</h1>
          <p className="mb-4 text-center">Experience the smoothest skin with our gentle waxing services, leaving you<br /> feeling confident  silky soft.</p>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={Hr3} alt="Product" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
