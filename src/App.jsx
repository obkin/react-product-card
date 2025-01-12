import './App.css';
import Gallery from './components/Gallery';
import Header from './components/Header';
import ModelViewer from './components/ModelViewer';
import SpecificationTable from './components/SpecificationTable';
import {
  product,
  images,
  specifications,
  modelProps,
} from './data/productData';

function App() {
  return (
    <div className="App">
      <Header product={product} />
      <Gallery images={images} />
      <ModelViewer modelProps={modelProps} />
      <SpecificationTable specifications={specifications} />
    </div>
  );
}

export default App;
