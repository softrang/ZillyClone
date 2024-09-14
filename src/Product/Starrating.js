import React, { useState } from 'react';

// Star component
const Star = ({ selected = false, onSelect, color = "gray", selectedColor = "gold" }) => (
    <span 
      style={{ cursor: "pointer", color: selected ? selectedColor : color }}
      onClick={onSelect}
    >
      &#9733;
    </span>
  );

// StarRating component
const StarRating = ({ totalStars = 5, defaultRating = 0, color = "gray", selectedColor = "gold" }) => {
    const [selectedStars, setSelectedStars] = useState(defaultRating);
  

  return (
    <div className='flex justify-left items-center'>
    {[...Array(totalStars)].map((_, index) => (
      <Star
        key={index}
        selected={index < selectedStars}
        onSelect={() => setSelectedStars(index + 1)}
        color={color}
        selectedColor={selectedColor}
      />
    ))}
   <p className='text-base'>&nbsp;({selectedStars}.00)</p>
  </div>
  );
};

export default StarRating;
