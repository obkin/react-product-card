import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import ModelViewer from './components/ModelViewer/ModelViewer';
import SpecificationTable from './components/SpecificationTable/SpecificationTable';
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
