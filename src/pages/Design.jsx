import { useState } from 'react';

import '../css/PageDesign.css';
import BackBar from '../components/BackBar';

import { RiCheckboxBlankFill } from 'react-icons/ri';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import { CgTrash } from 'react-icons/cg';

export default function Design() {
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

  const handleNewColor = () => {};

  const handleReset = () => {
    setBoard(Array(ROWS * COLS).fill('white'));
  };

  return (
    <>
      <div className="container">
        <BackBar />
        <h1>직접 만들기</h1>
        <button onClick={() => handleDownload}> 저장하기</button>
        <div className="content">
          <div className="grid-section">
            {board.map((color, index) => (
              <div
                key={index}
                onClick={() => handleBoxClick(index)}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                  border: '1px solid gray', // 칸 구분선
                  boxSizing: 'border-box', // 크기 밀림 방지
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
          <div className="img-section">
            <button onClick={() => handlePixel()}>이미지 파일 선택</button>
            <p>파일이름.jpg</p>
          </div>
          <div className="color-section">
            <button
              onClick={() => setSelectedColor('Red')}
              className="colorbtn1"
            >
              <div className='color-section-left'>
                <RiCheckboxBlankFill size={16} color="Red" />
                01 Red
              </div>
              <div className="color-section-right">
                <HiMiniPencilSquare size={18} color="black" />
                <CgTrash size={18} color="black" />
              </div>
            </button>
            <button onClick={() => setSelectedColor('Yellow')} class="colorbtn1">
              Yellow
            </button>
            <button onClick={() => setSelectedColor('white')} class="colorbtn1">
              white
            </button>
          </div>
          <div className="coloradd-section">
            <button onClick={() => handleNewColor()} className='colorbtn2'>+색깔 추가</button>
          </div>

          <div style={{ padding: 30 }}></div>

          <div className="reset-section">
            <button onClick={() => handleReset()} className='colorbtn2'>RESET</button>
          </div>
        </div>
      </div>
    </>
  );
}
