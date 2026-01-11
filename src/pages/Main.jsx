import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>홈 화면입니다.</h1>

      <Link to="/sub1">서브 1 페이지</Link>
    </div>
  );
}

export default Main;
