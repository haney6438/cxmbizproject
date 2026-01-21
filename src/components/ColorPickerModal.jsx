import { useState } from 'react';
import '../css/ColorPickerModal.css';
import { HexColorPicker } from 'react-colorful';

const ColorPickerModal = ({ isOpen, onClose, onConfirm }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#ffffff');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!name.trim()) return;
    onConfirm({ name, value: color });
    setName('');
    setColor('#ffffff');
  };

  return (
    <div onClick={onClose} className="c-modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="c-modal">
        <div className="c-modal-inner">
          <h2>원하는 색을 추가하세요</h2>

          <div className="input-section">
            <div className="input">
              <p>색 별명:</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="예: 11) Mint"
              />
            </div>
            <div className="input">
              <p>색 선택:</p>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
          </div>

          <div className="btn-section">
            <button className='btn1'onClick={handleConfirm}>확인</button>
            <button className='btn2' onClick={onClose}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerModal;
