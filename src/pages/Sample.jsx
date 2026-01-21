import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import YouTube from 'react-youtube';
import '../css/PageSample.css';

import BackBar from '../components/BackBar';
import Modal from '../components/BookModal';
import Book from '../components/Book';
import { samples } from '../components/ImgSample';
import jeans from '../img/btn-jeans.png';

import { AiFillStar } from 'react-icons/ai';

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
    if (!aRef.current) return;

    aRef.current.click();
    toast.success('이미지가 저장되었습니다');
  };

  return (
    <>
      <div className="container">
        <BackBar />
        <Link to="/" className="gomain-section">
          home🏠
        </Link>
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
            <button
              onClick={download}
              className="download-img-btn"
              style={{ background: `url(${jeans})` }}
            >
              저장하기
            </button>
            <a
              ref={aRef}
              href={sample.sam}
              download={`${sample.name}.png`}
              style={{ display: 'none' }}
            >
              download
            </a>

            <button
              onClick={() => navigate(`/design/${sample.id}`)}
              className="design-btn"
            >
              직접 만들기
            </button>
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

          <div style={{ padding: 30 }}></div>

          <div className='fillsection'>
            <div className='text'>
            <h2>안녕하세요</h2>
            <p>본 사이트는 네모 비즈 키링 만들기를 돕기 위해 제작되었습니다. <br/>
            이미지 다운받고 화질이 많이 떨어지면 걍 캡쳐하는거 추천드립니다.. 죄삼다;</p>
            <p>문의사항이 있다면 X.com&#40;구 트위터&#41; @zz0ngnist 계정으로 연락주십시오.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
