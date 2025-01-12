import './App.css';
import Gallery from './components/Gallery';
import Header from './components/Header';
import ModelViewer from './components/ModelViewer';
import SpecificationTable from './components/SpecificationTable';

function App() {
  return (
    <div className="App">
      <Header
        name="Product Name"
        description="Short description..."
        price="Price: $199"
      />
      <Gallery />
      <ModelViewer />
      <SpecificationTable />
    </div>
  );
}

export default App;
