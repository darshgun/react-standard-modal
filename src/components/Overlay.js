import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Overlay component of the modal
 */
const Overlay = forwardRef(({ invisible = false, ...rest }, ref) => {
  return <div ref={ref} {...rest} />;
});

Overlay.propTypes = {
  invisible: PropTypes.bool,
};

Overlay.displayName = 'Modal overlay';

export default Overlay;
