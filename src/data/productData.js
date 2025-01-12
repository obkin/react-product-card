export const product = {
  name: 'T-Shirt',
  description: 'A comfortable cotton T-shirt',
  price: '$20.00',
};

export const images = [
  {
    src: 'https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/8/087AT-22X-001-1-909731.jpg',
    alt: 'image-1',
  },
  {
    src: 'https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/8/087AT-22X-002-1-909731.jpg',
    alt: 'image-2',
  },
  {
    src: 'https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/8/087AT-22X-003-1-909731.jpg',
    alt: 'image-3',
  },
  {
    src: 'https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/8/087AT-22X-050-1-825107_3.jpg',
    alt: 'image-4',
  },
  {
    src: 'https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/8/087AT-22X-051-1-825107_3.jpg',
    alt: 'image-5',
  },
  {
    src: 'https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/8/087AT-22X-052-1-825107_3.jpg',
    alt: 'image-6',
  },
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
