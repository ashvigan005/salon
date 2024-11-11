import React from 'react';

const Background = () => {
  return (
    <div className="h-96 w-full bg-gray-100 flex items-center justify-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Anta&family=Jaro:opsz@6..72&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Reddit+Mono:wght@200..900&display=swap');
        `}
      </style>
      <div className="p-8 mt-2">
        {/* Import Google Fonts stylesheet */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Reddit+Mono:wght@200..900&display=swap"
        />

        {/* Content */}
        <h2 className="font-jaro text-3xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
        <p style={{ fontFamily: 'Anta, sans-serif' }} className="text-lg mt-2">
          Our mission at New Waves Saloon is to provide exceptional service and create a welcoming and relaxing environment for our clients. We strive to exceed your expectations with every visit, helping you achieve your desired look and leaving you feeling rejuvenated and refreshed.
        </p>
        <h2 className="font-jaro text-3xl font-semibold text-gray-800 mt-6 mb-4">Online Booking</h2>
        <p style={{ fontFamily: 'Anta, sans-serif' }} className="text-lg mt-2">
          We understand the importance of convenience in today's busy world, which is why we offer online booking services. With just a few clicks, you can schedule your appointment at a time that suits you best, whether you're at home, at work, or on the go.
        </p>
        <h2 className="font-jaro text-3xl font-semibold text-gray-800 mt-6 mb-4">Special Offers</h2>
        <p style={{ fontFamily: 'Anta, sans-serif' }} className="text-lg mt-2">
          Don't miss out on our special offers and promotions! Check our website regularly for exclusive deals on your favorite services and treatments.
        </p>
      </div>
    </div>
  );
}

export default Background;
