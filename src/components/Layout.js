import { Link, Outlet } from "react-router-dom";

import "./style.css";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <nav>
        <ul className="layoutul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/assessment">Assessment</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
