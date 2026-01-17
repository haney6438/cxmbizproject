import { useState } from 'react';

import '../App.css';
import BackBar from '../components/BackBar';

export default function Design() {
  const COLS = 18;
  const ROWS = 14;

  const [selectedColor, setSelectedColor] = useState('white');

  const [board, setBoard] = useState(Array(ROWS * COLS).fill('white'));

  const handleBoxClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = selectedColor;
    setBoard(newBoard);
  };

  const handleReset = () => {
    setBoard(Array(ROWS * COLS).fill('white'));
  };

  return (
    <>
      <div className="container">
        <BackBar />
        <h1>직접 만들기</h1>
        <div className="content">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${COLS}, 30px)`,
              gap: 0,
              border: '1px solid gray',
              width: COLS * 30,
            }}
          >
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
          <div>
            <button onClick={() => setSelectedColor('Red')}>Red</button>
            <button onClick={() => setSelectedColor('Yellow')}>Yellow</button>
            <button onClick={() => setSelectedColor('Green')}>Green</button>
          </div>
          <button onClick={() => handleReset()}>RESET</button>
        </div>
      </div>
    </>
  );
}
