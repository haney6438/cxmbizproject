import { Link } from 'react-router-dom';

function Sub1() {
  return (
    <div>
      <h1>서브 1 화면입니다.</h1>

      <Link to="/sub2">서브 2 페이지</Link>
    </div>
  );
}

export default Sub1;
