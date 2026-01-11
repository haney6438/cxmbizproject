import { useNavigate } from 'react-router-dom';

import { samples } from '../components/ImgSample';

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>홈 화면입니다.</h1>
        <div className="grid">
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
