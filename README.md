# react-standard-modal

A clean & simple modal component for React.

## Table of Contents

- [Installation](#installation)
- [Basic usage](#basic-usage)
- [API documentation](#api-documentation)
- [License](#license)
- [Examples](#examples)
- [Contributors](#contribute)

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

| Property            | Type        | Default value   | Description                                                                         |
| ------------------- | ----------- | --------------- | ----------------------------------------------------------------------------------- |
| **className**       | object      |                 | Object that contains custom classes for Modal, Portal & Overlay components          |
| **container**       | DOM element | `document.body` | The dom element which will have the Portal append to it                             |
| **open**            | bool        | `false`         | Describes if the modal should be open or not                                        |
| **unMountIfClosed** | bool        | `false`         | Describes whether the modal should be removed from dom when closed                  |
| **style**           | object      |                 | Object that contains inline styles objects for Modal, Portal and Overlay components |
| **disableOverlay**  | bool        | `false`         | Describes whether the Overlay should be shown or not                                |
| **overlayRef**      | ref         |                 | Overlay ref callback                                                                |
| **overlayClick**    | func        |                 | Callback fired when clicking on the Overlay component                               |

## License

[MIT](https://github.com/darshgun/react-standard-modal/blob/master/LICENSE)

## Examples

Coming soon

## Contribute

Contributions of any kind welcome!
