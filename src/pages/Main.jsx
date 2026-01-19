import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import '../css/PageMain.css';
import { samples } from '../components/ImgSample';
import BackBar from '../components/BackBar';

function Main() {
  const navigate = useNavigate(); // 배경화면 개별지정
  useEffect(() => {
    document.body.classList.add('main');

    return () => {
      document.body.classList.remove('main');
    };
  }, []);

  return (
    <>
      <div className="container">
        <BackBar />
        <div className="list">
        <h1>Do as you like</h1>
          {samples.map((sample) => (
            <img
              key={sample.id}
              src={sample.img}
              alt={sample.name}
              onClick={() => navigate(`/sample/${sample.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
