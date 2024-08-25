import React from 'react';
import './ScrollingStrip.css'

const ScrollingStrip = () => {
  const categories = [
    'Design', 'Tech', 'Fashion', 'Health', 'Entertainment', 'Science',
    'Finance', 'Music', 'Art', 'Environment', 'Education', 'Politics'
  ];

  return (
    <div className="strip-container w-full h-full bg-black overflow-hidden">
      <div className="scrolling-text whitespace-nowrap flex animate-scroll">
        {categories.map((category, index) => (
          <div key={index} className="text-white font-semibold mx-6">
           -  {category}
          </div>
        ))}
       {categories.map((category, index) => (
          <div key={index + categories.length} className="text-white font-semibold mx-6">
            -  {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingStrip;
