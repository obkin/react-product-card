import React from 'react';

const Header = ({ name, description, price }) => {
  return (
    <header className="product-header">
      <h1>{name}</h1>
      <p>{description}</p>
      <span className="product-price">{price}</span>
    </header>
  );
};

export default Header;
