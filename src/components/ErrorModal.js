import React from 'react';
import ReactDOM from 'react-dom'

const MODAL_STYLES = {
  positon: 'fixed',
  top: '50%',
  left: '50%',
  width: '85%',
  transform: 'translate(10%, -200%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 1000,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
}


const AnsModal = ({open, onClose, children}) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}></div>
      <div style={MODAL_STYLES}>{children}</div>
    </>,
    document.getElementById('portal')
  );
}

export default AnsModal;