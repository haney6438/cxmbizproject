import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';
import '../css/PageDesign.css';

import BackBar from '../components/BackBar';
import Modal from '../components/ColorPickerModal';
import { samples } from '../components/ImgSample';
import { colors } from '../components/SetColorBtn';

import download from '../img/download.png';
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

  const [board, setBoard] = useState(Array(COLS * ROWS).fill('#ffffff'));

  const [selectedColor, setSelectedColor] = useState('white');

  const handleBoxClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = selectedColor;
    setBoard(newBoard);
  };

  const handleDownload = () => {
    const target = document.getElementById('download');
    if (!target) {
      return alert('사진 저장에 실패했습니다.');
    }
    html2canvas(target).then((canvas) => {
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = canvas.toDataURL('image/png');
      link.download = 'Design_doan.png'; // 다운로드 이미지 파일 이름
      link.click();
      document.body.removeChild(link);
    });
    
    toast.success('이미지가 저장되었습니다');
  };
  const [fileName, setFileName] = useState('<-픽셀화 시키기 버튼');

  const handlePixel = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name); 
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = COLS;
      canvas.height = ROWS;

      const ctx = canvas.getContext('2d');

      // 이미지를 14x18로 강제 축소
      ctx.drawImage(img, 0, 0, COLS, ROWS);

      const imageData = ctx.getImageData(0, 0, COLS, ROWS).data;
      const newBoard = [];

      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];

        newBoard.push(`rgb(${r}, ${g}, ${b})`);
      }

      setBoard(newBoard);
    };
  };

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
    setFileName('<-픽셀화 시키기 버튼')
    toast.success('초기화되었습니다');    
  };

  return (
    <>
      <div className="container">
        <BackBar />
        <Link to="/" className='gomain-section'>home🏠</Link>
        <button
          onClick={handleDownload}
          className="download-doan-btn"
          style={{ backgroundImage: `url(${download})` }}
        />
        <div className="grid-section">
          <div id="download" className="grid">
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
            <input
              type="file"
              accept="image/*"
              id="imageInput"
              value=""
              style={{ display: 'none' }}
              onChange={handlePixel}
            />

            <button
              onClick={() => document.getElementById('imageInput').click()}
            >
              이미지 선택
            </button>
            <p>{fileName || '<-픽셀화 시키기 버튼'}</p>
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
