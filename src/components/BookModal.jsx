import { HiXMark } from 'react-icons/hi2';
import '../css/BookModal.css';

const BookModal = ({ isOpen, onClose, children }) => {
  // 만약 isOpen이 false이면 null을 반환하여 모달을 렌더링하지 않음
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <div className="modal-inner">
          <HiXMark onClick={onClose} className="modal-close"></HiXMark>
          {children}
        </div>
      </div>
    </div>
  );
};
export default BookModal;
