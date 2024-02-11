'use client';
// use client is used when we want to
//listen to browser
//Access browser API
//Maintain State
//use effects

import React from 'react';

const AddToCart = () => {
  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={() => console.log('clicked')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
