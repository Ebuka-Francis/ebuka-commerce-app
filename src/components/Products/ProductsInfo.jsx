import React from 'react';

export default function ProductsInfo({images, alt, price, action, title}) {
  return (
    <div className= 'product-info' onClick={action}>
      <img src={images} alt={alt}  />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>

  )
}
