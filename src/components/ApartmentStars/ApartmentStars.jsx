import React from 'react';
import '../ApartmentHeader/ApartmentHeader.css';

function ApartmentRating(props) {
  return (
    <div className='apartment__owner__star'>
      {[1, 2, 3, 4, 5].map((number) => (
        <i key={number} className={props.rating >= number ? 'fa-solid fa-star on' : 'fa-solid fa-star'}></i>
      ))}
    </div>
  );
}

export default ApartmentRating