# react-standard-modal

A clean & simple modal component for React.

![npm](https://img.shields.io/npm/v/react-standard-modal) ![npm](https://img.shields.io/npm/dt/react-standard-modal) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-standard-modal) ![GitHub](https://img.shields.io/github/license/darshgun/react-standard-modal) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

## Table of Contents

- [Demos](#demos)
- [Installation](#installation)
- [Basic usage](#basic-usage)
- [API documentation](#api-documentation)
- [License](#license)
- [Contributors](#contribute)

## Demos

- [Basic example](https://codesandbox.io/s/react-standard-modal-basic-example-4brrf)
- [Storybook example](https://codesandbox.io/s/react-standard-modal-storybook-s2mhq)

## Installation

To install use [yarn](https://yarnpkg.com),

    $ yarn add react-standard-modal

or [npm](https://npmjs.org/),

    $ npm install --save react-standard-modal

## Basic usage

```js
import React, { Fragment, useState } from 'react';
import Modal from 'react-standard-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal open={isOpen} onClose={handleClose}>
        {body}
      </Modal>
    </Fragment>
  );
}
```

## API documentation

| Prop                    | Type                                                 | Required | Description                                                                                 |
| ----------------------- | ---------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| **children**            | node                                                 |          | Provide the contents of your Modal                                                          |
| **className**           | `{ Modal: string, Overlay: string, Portal: string }` |          | Class names for Modal, Portal and Overlay components                                        |
| **closeOnOverlayClick** | boolean                                              |          | Todo: Closes the modal when clicking on Overlay.                                            |
| **disableOverlayClick** | boolean                                              |          | Disables Overlay click                                                                      |
| **disableOverlay**      | boolean                                              |          | Specify whether Overlay should render or not. If `true`, Overlay component will not render. |
| **disablePortal**       | boolean                                              |          | If `true`, Modal & Overlay will mount inside the parent component.                          |
| **onClose**             | function                                             | ✓        | Specify the function that fires on Modal closes.                                            |
| **onOpen**              | function                                             |          | Specify the function that fires on Modal opens.                                             |
| **open**                | boolean                                              | ✓        | Specify whether the Modal is currently open.                                                |
| **overlayClick**        | function                                             |          | Specify the function that fires when clicking on Overlay.                                   |
| **overlayRef**          | function                                             |          | Ref callback of the Overlay component.                                                      |
| **style**               | `{ Modal: object, Overlay: object, Portal: object }` |          | Inline styles for Modal, Portal and Overlay components.                                     |
| **unMountIfClosed**     | boolean                                              |          | If `true`, the modal will not mount to DOM when it's not open.                              |

## License

[MIT](https://github.com/darshgun/react-standard-modal/blob/master/LICENSE)

## Contribute

Contributions of any kind welcome!
