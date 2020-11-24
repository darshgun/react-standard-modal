import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  container: PropTypes.func,
  disablePortal: PropTypes.bool,
};

/**
 * Modal portal
 */
const Portal = ({ children, container, disablePortal }) => {
  if (disablePortal) {
    return children;
  }

  if (container) {
    return createPortal(children, container);
  }

  return;
};

Portal.propTypes = propTypes;

Portal.displayName = 'Modal Portal';

export default Portal;
