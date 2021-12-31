import ReactModal from 'react-modal';

interface Props {
  open: boolean;
  children?: React.ReactElement;
  path: (event: React.MouseEvent | React.KeyboardEvent) => void;
}
const Modal: React.FC<Props> = ({ open, path, children }) => {
  return (
    <ReactModal isOpen={open} onRequestClose={path} ariaHideApp={false}>
      {children}
    </ReactModal>
  );
};

export default Modal;
