import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <Link to ='/'>홈 </Link> |{" "}
        <Link to ='/sample'>샘플 </Link> |{" "}
        <Link to ='/design'>디자인 </Link>
    </nav>

  );
}

export default Nav;
