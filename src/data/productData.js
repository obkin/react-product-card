export const product = {
  name: 'T-Shirt',
  description: 'A comfortable cotton T-shirt',
  price: '$20.00',
};

export const images = [
  { src: 'https://via.placeholder.com/150', alt: 'image-1' },
  { src: 'https://via.placeholder.com/150', alt: 'image-2' },
  { src: 'https://via.placeholder.com/150', alt: 'image-3' },
  { src: 'https://via.placeholder.com/150', alt: 'image-4' },
  { src: 'https://via.placeholder.com/150', alt: 'image-5' },
];

export const specifications = {
  Size: 'M',
  Material: 'Cotton',
  Color: 'Red',
};

export const modelProps = {
  modelUrl: 'https://example.com/3d-model.glb',
  altText: '3D model of the product',
  ar: true, // Дозволяє перегляд у AR (доповнена реальність)
  cameraControls: true, // Дозволяє обертати модель
  autoRotate: true, // Модель буде автоматично обертатися
};