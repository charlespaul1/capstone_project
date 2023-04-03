import React from 'react';
import './foodCard.css';
const FoodCard = ({ title, image, description, price }) => {
  return (
    <div className="food-card">
      <img src={image} alt={title} />
      <div className="food-card-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default FoodCard;
