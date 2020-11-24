import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { namespaces } from '../config/config';
import Overlay from './Overlay';
import Portal from './Portal';
import { styles } from './styles.js';

const propTypes = {
  /**
   * Provide the contents of your Modal
   */
  children: PropTypes.node,
  /**
   * Class names for Modal, Portal and Overlay components.
   */
  className: PropTypes.object,
  /**
   * Todo: Closes the modal when clicking on Overlay.
   */
  closeOnOverlayClick: PropTypes.bool,
  /**
   * Specify the `container` that will have the Modal portal appended to it.
   */
  container: PropTypes.func,
  /**
   * If `true`, Modal & Overlay will mount inside the parent component.
   */
  disablePortal: PropTypes.bool,
  /**
   * Specify whether Overlay should render or not.
   * If `true`, Overlay component will not render.
   */
  disableOverlay: PropTypes.bool,
  /**
   * Specify the function that fires on Modal closes.
   */
  onClose: PropTypes.func,
  /**
   * Specify the function that fires on Modal opens.
   */
  onOpen: PropTypes.func,
  /**
   * Specify whether the Modal is currently open.
   */
  open: PropTypes.bool,
  /**
   * Specify the function that fires when clicking on Overlay.
   */
  overlayClick: PropTypes.func,
  /**
   * Ref callback of the Overlay component.
   */
  overlayRef: PropTypes.func,
  /**
   * Inline styles for Modal, Portal and Overlay components.
   */
  style: PropTypes.object,
  /**
   * If `true`, the modal will not mount to DOM when it's not open.
   */
  unMountIfClosed: PropTypes.bool,
};

export const Modal = forwardRef(function Modal(
  {
    children,
    className,
    container,
    disableOverlay,
    disablePortal,
    onClose,
    onOpen,
    open,
    overlayClick,
    overlayRef,
    style,
    unMountIfClosed,
  },
  ref
) {
  /**
   * Internal show state
   */
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(open);

    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [open]);

  const handleOpen = () => {
    onOpen();
  };
  const handleClose = () => {
    onClose();
  };

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
    return;
  }

  return (
    <Portal container={container} disablePortal={disablePortal}>
      <div {...properties.portal}>
        <div {...properties.component}>{children}</div>
        {!disableOverlay && <Overlay {...properties.overlay} />}
      </div>
    </Portal>
  );
});

Modal.propTypes = propTypes;

Modal.defaultProps = {
  open: false,
  unMountIfClosed: false,
  container: () => document.body,
  closeOnOverlayClick: true,
  style: {},
  className: {},
  onClose: () => {},
  onOpen: () => {},
};

Modal.displayName = 'Modal';

export default Modal;
