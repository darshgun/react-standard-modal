import React, { forwardRef } from 'react';

/**
 * Overlay component of the modal
 */
const Overlay = forwardRef((props, ref) => <div ref={ref} {...props} />);

Overlay.displayName = 'Modal overlay';

export default Overlay;
