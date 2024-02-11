import React from 'react';
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css';

// Benefits of using tailwind
// With tailwind when we build our application, our final css bundle will only have the utility classes we have used in our markup
const ProductCard = () => {
  return (
    // <div className={styles.card}>
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
