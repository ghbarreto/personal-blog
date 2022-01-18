import ReactModal from 'react-modal';

interface Props {
  open: boolean;
  children?: React.ReactElement;
  path: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const customStyle = {
  overlay: {
    backgroundColor: 'transparent',
    border: '0',
    margin: '0 auto',
  },
  content: {
    borderRadius: 50,
    "overflowX": 'hidden',
    "::WebkitScrollbar": {
      width: '10px'
    }
  },
};

const Modal: React.FC<Props> = ({ open, path, children }) => {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={path}
      ariaHideApp={false}
      style={customStyle}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
