import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <h1>MY TODO</h1>
      <nav>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/done">Done</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;