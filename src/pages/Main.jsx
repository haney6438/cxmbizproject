import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import '../App.css';
import { samples } from '../components/ImgSample';
import BackBar from '../components/BackBar';

function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add("main");

    return () => {
      document.body.classList.remove("main");
    };
  }, []);

  return (
    <>
    <BackBar/>
      <div className="container">
        <h1>Do as you like</h1>
        <div className="list">
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
