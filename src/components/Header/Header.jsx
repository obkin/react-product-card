import React from 'react';
import './Header.css';

const Header = ({ product }) => {
  return (
    <header className="product-header">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span className="product-price">{product.price}</span>
    </header>
  );
};

export default Header;
