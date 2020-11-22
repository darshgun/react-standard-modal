import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../src';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open modal
      </button>

      <Modal
        /**
         * Custom class names
         */
        className={{
          Portal: 'portal-class',
          Modal: 'modal-class',
          Overlay: 'overlay-class',
        }}
        /**
         * Custom styles
         */
        style={{
          Modal: {
            padding: 20,
            minHeight: 150,
            minWidth: 300,
          },
          Overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
        open={isOpen}
        container={document.body}
        /**
         * Overlay related properties
         */
        overlayClick={() => handleOverlayClick()}
      >
        Modal demo
      </Modal>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
