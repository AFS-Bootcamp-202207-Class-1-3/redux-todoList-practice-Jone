import { Link, Outlet } from "react-router-dom";
import "./layout.css"

function Layout() {

  return (
    <div className="layout">
      <h1>MY TODO</h1>
      <nav>
        <Link to="">Home&nbsp;&nbsp;</Link>
        <Link to="/about">&nbsp;&nbsp;About&nbsp;&nbsp;</Link>
        <Link to="/done">&nbsp;&nbsp;Done</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;