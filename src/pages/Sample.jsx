import { Link, useParams } from 'react-router-dom';
import { useRef } from 'react';

import '../App.css';
import { samples } from '../components/ImgSample';
import BackBar from '../components/BackBar';

export default function Sample() {
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
    <BackBar/>
      <div className="parents">
        <h1>샘플 제공</h1>

        <img src={sample.img} alt={sample.name} />

        <div>
          <button onClick={download}>도안 다운받기</button>

          <a
            ref={aRef}
            href={sample.img}
            download={`${sample.name}.png`}
            style={{ display: 'none' }}
          >
            download
          </a>

          <Link to="/design">직접 그리기</Link>
        </div>
      </div>
    </>
  );
}
