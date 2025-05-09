import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
