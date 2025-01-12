import './App.css';

function App() {
  return (
    <div className="App">
      <header className="product-header">
        <h1>Product Name</h1>
        <p>Short description...</p>
        <span className="product-price">Price: $199</span>
      </header>

      <div id="gallery" className="product-gallery">
        {/* <!-- Photos --> */}
      </div>

      <div id="model-viewer" className="product-3d-viewer">
        {/* <!-- 3D-model --> */}
      </div>

      <table className="product-specifications">
        <tbody>
          <tr>
            <td>Size:</td>
            <td>M</td>
          </tr>
          <tr>
            <td>Material:</td>
            <td>Cotton</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
