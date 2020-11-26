import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  disablePortal: PropTypes.bool,
};

/**
 * Modal portal
 */
const Portal = ({ children, container, disablePortal }) => {
  if (disablePortal) {
    return children;
  }

  return createPortal(children, container);
};

Portal.propTypes = propTypes;

Portal.displayName = 'Modal Portal';

export default Portal;
