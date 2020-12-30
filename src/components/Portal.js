import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  disablePortal: PropTypes.bool,
};

/**
 * Modal portal
 */
const Portal = ({ children, disablePortal }) => {
  const [container, setContainer] = useState();

  useEffect(() => {
    if (document) {
      setContainer(document.body);
    }
  }, []);

  if (!disablePortal && container) {
    return createPortal(children, container);
  }

  return children;
};

Portal.propTypes = propTypes;

Portal.displayName = 'Modal Portal';

export default Portal;
