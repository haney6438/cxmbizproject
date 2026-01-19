import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

import YouTube from 'react-youtube';
import { AiFillStar } from 'react-icons/ai';

import '../css/PageSample.css';
import { samples } from '../components/ImgSample';
import BackBar from '../components/BackBar';
import Modal from '../components/BookModal';
import Book from '../components/Book';

export default function Sample() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const aRef = useRef(null);

  const imgid = Number(id);
  const sample = samples.find((s) => s.id === imgid);

  if (!sample) {
    return <div>잘못된 접근입니다.</div>;
  }

  const download = () => {
    aRef.current && aRef.current.click();
  };

  return (
    <>
      <div className="container">
        <BackBar />
        <Link to="/">home</Link>
        <div className="content">
          <img
            src={sample.sam}
            alt={sample.name}
            style={{
              display: 'block',
              width: 'calc(100% - 20px)',
              margin: '0 auto',
              paddingBottom: '60px',
            }}
          />
          <div className="btnsection">
            <button onClick={download}>도안 다운받기</button>
            <a
              ref={aRef}
              href={sample.sam}
              download={`${sample.name}.png`}
              style={{ display: 'none' }}
            >
              download
            </a>
            <button onClick={() => navigate('/design')}>직접 그리기</button>
          </div>

          <div className="starsection">
            <AiFillStar size={20} color="black"></AiFillStar>
            <AiFillStar size={20} color="black"></AiFillStar>
            <AiFillStar size={20} color="black"></AiFillStar>
            <AiFillStar size={20} color="black"></AiFillStar>
            <AiFillStar size={20} color="black"></AiFillStar>
          </div>

          <div className="fillsection">
            <div
              className="howtomake"
              onClick={() => setOpen(true)}
              role="button"
            >
              <div className="word">
                {['H', 'O', 'W'].map((char, i) => (
                  <span key={i} className="circle">
                    {char}
                  </span>
                ))}
              </div>
              <div className="word">
                {['T', 'O'].map((char, i) => (
                  <span key={i} className="circle">
                    {char}
                  </span>
                ))}
              </div>
              <div className="word">
                {['M', 'A', 'K', 'E'].map((char, i) => (
                  <span key={i} className="circle">
                    {char}
                  </span>
                ))}
              </div>
            </div>

            <Modal isOpen={open} onClose={() => setOpen(false)}>
              {/* children */}
              <div>
                <Book />
              </div>
            </Modal>
          </div>

          <div style={{ padding: 30 }}></div>

          <div className="fillsection">
            <YouTube
              //videoId : https://youtu.be/u89aNeJlyg0?si=5FMQQUo-tdHBCm5H 프리티우먼 mv
              videoId="u89aNeJlyg0"
              opts={{
                width: '100%',
                height: '100%',
                cursor: PointerEvent,
                playerVars: {
                  autoplay: 0, //자동재생 O
                  rel: 0, //관련 동영상 표시하지 않음
                  modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                },
              }}
              onEnd={(e) => {
                e.target.stopVideo(0);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
