import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

import '../css/PageDesign.css';
import BackBar from '../components/BackBar';
import Modal from '../components/ColorPickerModal';
import download from '../img/download.png';
import { samples } from '../components/ImgSample';
import { colors } from '../components/SetColorBtn';

import { RiCheckboxBlankFill } from 'react-icons/ri';
import { CgTrash } from 'react-icons/cg';

export default function Design() {
  const { id } = useParams();
  const imgid = Number(id);
  const sample = samples.find((s) => s.id === imgid);
  const color = sample.color
    .map((id) => colors.find((c) => c.id === id))
    .filter(Boolean);

  const COLS = 18;
  const ROWS = 14;

  const [board, setBoard] = useState(Array(ROWS * COLS).fill('white'));

  const [selectedColor, setSelectedColor] = useState('white');

  const handleBoxClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = selectedColor;
    setBoard(newBoard);
  };

  const handleDownload = () => {};

  const handlePixel = () => {};

  const [colorList, setColorList] = useState(color);

  const handleDeleteColor = (index) => {
    setColorList((prev) => prev.filter((_, i) => i !== index));
  };

  const [open, setOpen] = useState(false);
  const handleAddColor = ({ name, value }) => {
    setColorList((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        value,
      },
    ]);
    setOpen(false);
  };

  const handleResetColor = () => {
    setBoard(Array(ROWS * COLS).fill('white'));
  };

  return (
    <>
      <div className="container">
        <BackBar />
        <Link to="/">home</Link>
        <button
          onClick={handleDownload}
          className="downloadbtn"
          style={{ backgroundImage: `url(${download})` }}
        />
        <div className="grid-section">
          <div className="grid">
            {board.map((color, index) => (
              <div
                key={index}
                onClick={() => handleBoxClick(index)}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  backgroundColor: color,
                  border: '0.5px solid var(--gray2)', // 칸 구분선
                  boxSizing: 'border-box', // 크기 밀림 방지
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
        <div className="content">
          <div className="img-section">
            <button onClick={() => handlePixel()}>이미지 파일 선택</button>
            <p>파일이름.jpg</p>
          </div>

          <div className="color-section">
            {colorList.map((c, index) => (
              <button
                key={c.id ?? index}
                onClick={() => setSelectedColor(c.value)}
                className={`colorbtn1 ${selectedColor === c.value ? 'selected' : ''}`}
              >
                <div className="color-section-left">
                  <RiCheckboxBlankFill size={16} color={c.value} />
                  {c.name}
                </div>
                <div className="color-section-right">
                  {/* <HiMiniPencilSquare
                    size={18}
                    color="black"
                    onClick={handleRenameColor}
                  /> */}
                  <CgTrash
                    size={18}
                    color="black"
                    onClick={() => handleDeleteColor(index)}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="coloradd-section">
            <button className="colorbtn2" onClick={() => setOpen(true)}>
              + 추가
            </button>
            <Modal
              isOpen={open}
              onClose={() => setOpen(false)}
              onConfirm={handleAddColor}
            ></Modal>
          </div>

          <div className="divider-section"></div>

          <div className="reset-section">
            <button onClick={() => handleResetColor()} className="colorbtn2">
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
