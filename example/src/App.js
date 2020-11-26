import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../src';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => console.log('Opening');
  const handleClose = () => {
    setIsOpen(false);
    console.log('Closing');
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
        // closeOnOverlayClick={false}
        // container={document.body}
        // disableOverlayClick={true}
        // disableOverlay={true}
        // disablePortal={true}
        onClose={handleClose}
        onOpen={handleOpen}
        open={isOpen}
        // overlayClick={() => {}}
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
        unMountIfClosed={false}
      >
        Modal demo
      </Modal>
      <br />
      Is open: <span dangerouslySetInnerHTML={{ __html: isOpen }} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
