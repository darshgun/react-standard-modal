import React, { forwardRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { namespaces } from './config';
import { Overlay } from './Overlay';
import { styles } from './styles.js';

export const Modal = forwardRef(function Modal(
  {
    children,
    className,
    open,
    unMountIfClosed,
    container,
    style,
    disableOverlay,
    overlayRef,
    overlayClick,
  },
  ref
) {
  /**
   * Internal show state
   */
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(open);
  }, [open]);

  /**
   * Prop filtering for Portal, Modal & Overlay components
   */
  const properties = {
    portal: {
      className: classNames(className[namespaces.portal]),
      style: show
        ? { ...styles[namespaces.portal], ...style[namespaces.portal] }
        : { ...styles.Hidden },
      ref,
    },
    component: {
      className: classNames(className[namespaces.component]),
      style: show
        ? { ...styles[namespaces.component], ...style[namespaces.component] }
        : { ...styles.Hidden },
    },
    overlay: {
      className: classNames(className[namespaces.overlay]),
      style: show
        ? { ...styles[namespaces.overlay], ...style[namespaces.overlay] }
        : { ...styles.Hidden },
      ref: overlayRef,
      onClick: overlayClick,
    },
  };

  /**
   * Unmounting component from dom
   */
  if (unMountIfClosed && !show) {
    return null;
  }

  return createPortal(
    <div {...properties.portal}>
      <div {...properties.component}>{children}</div>
      {!disableOverlay && <Overlay {...properties.overlay} />}
    </div>,
    container
  );
});

Modal.propTypes = {
  children: PropTypes.node,
  disableOverlay: PropTypes.bool,
  open: PropTypes.bool,
  unMountIfClosed: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.object,
  overlayClick: PropTypes.func,
  closeOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  open: false,
  unMountIfClosed: false,
  container: document.body,
  className: {},
  style: {},
  closeOnOverlayClick: true,
};

export default Modal;
