import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div id="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default Gallery;
