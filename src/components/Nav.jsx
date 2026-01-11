import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <Link to ='/'>홈 </Link>
        <Link to ='/Sub1'>서브1 </Link>
        <Link to ='/Sub2'>서브2 </Link>
    </nav>

  );
}

export default Nav;
