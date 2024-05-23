import React from 'react';

export default function ProductsInfo({images, alt, price, title}) {
  return (
    <div className= 'product-info'>
      <img src={images} alt={alt}  />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>

  )
}
