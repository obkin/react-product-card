import React from 'react';

const ModelViewer = ({ modelProps }) => {
  return (
    <div id="model-viewer">
      <model-viewer
        src={modelProps.modelUrl}
        alt={modelProps.altText}
        ar={modelProps.ar}
        camera-controls={modelProps.cameraControls}
        auto-rotate={modelProps.autoRotate}
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
