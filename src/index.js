import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { namespaces } from './config/config';
import Overlay from './components/Overlay';
import Portal from './components/Portal';
import { styles } from './styles/styles.js';

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
   * Disables Overlay click
   */
  disableOverlayClick: PropTypes.bool,
  /**
   * Specify whether Overlay should render or not.
   * If `true`, Overlay component will not render.
   */
  disableOverlay: PropTypes.bool,
  /**
   * If `true`, Modal & Overlay will mount inside the parent component.
   */
  disablePortal: PropTypes.bool,
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

const namespace = 'modal';

export const Modal = forwardRef(function Modal(
  {
    children,
    className,
    closeOnOverlayClick,
    disableOverlayClick,
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

  const handleOpen = () => {
    onOpen();
  };
  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = () => {
    overlayClick();

    if (closeOnOverlayClick) {
      handleClose();
    }
  };

  useEffect(() => {
    setShow(open);

    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [open, handleOpen, handleClose]);

  const modalClasses = cx(
    namespace,
    { [`${namespace}-is-open`]: show },
    className[namespaces.component]
  );
  const wrapperClasses = cx(`${namespace}-wrapper`);
  const overlayClasses = cx(`${namespace}-overlay`);

  /**
   * Modal content
   */
  const modal = (
    <div
      className={modalClasses}
      style={
        show
          ? { ...styles[namespaces.component], ...style[namespaces.component] }
          : { ...styles.Hidden }
      }
      ref={ref}
    >
      {children}
    </div>
  );

  return !unMountIfClosed || (unMountIfClosed && show) ? (
    <Portal disablePortal={disablePortal}>
      <div
        className={wrapperClasses}
        style={
          show
            ? { ...styles[namespaces.portal], ...style[namespaces.portal] }
            : { ...styles.Hidden }
        }
      >
        {modal}
        {!disableOverlay && (
          <Overlay
            className={overlayClasses}
            style={
              show
                ? { ...styles[namespaces.overlay], ...style[namespaces.overlay] }
                : { ...styles.Hidden }
            }
            ref={overlayRef}
            onClick={!disableOverlayClick ? handleOverlayClick : false}
          />
        )}
      </div>
    </Portal>
  ) : null;
});

Modal.propTypes = propTypes;

Modal.defaultProps = {
  className: {},
  closeOnOverlayClick: true,
  open: false,
  onClose: () => {},
  onOpen: () => {},
  overlayClick: () => {},
  style: {},
  unMountIfClosed: false,
};

Modal.displayName = 'Modal';

export default Modal;
