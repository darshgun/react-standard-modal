export const styles = {
  Portal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    inset: 0,
    zIndex: 1040,
  },

  Modal: {
    backgroundColor: 'white',
    position: 'relative',
    width: 'auto',
    margin: '0.5rem',
    zIndex: 1,
  },

  Overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  Hidden: {
    display: 'none',
  },
};
