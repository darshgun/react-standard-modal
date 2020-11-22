import React, { forwardRef } from 'react';
import { namespaces } from './config';

export const Overlay = forwardRef((props, ref) => <div ref={ref} {...props} />);

Overlay.propTypes = {};

Overlay.defaultProps = {};
