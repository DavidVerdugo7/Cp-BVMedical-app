import { Link } from "react-router-dom";

const navbarStyles = {
  background: "#242746",
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  border: "0.5px solid #3f4273",
  borderradius: "10px",
  transition: "border-color 0.3s",
};

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 mb-8 " style={navbarStyles}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              style={navbarStyles}
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/history">Histoy</Link>
              </li>
              <li>
                <Link to="/home">ID Search</Link>
              </li>
              <li>
                <a>About</a>
              </li>
              <br />
              <li className="mt-64">
                <Link to="/login">Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-md">BVMedical App</a>
        </div>
        <div className="navbar-end">
          {/* AVATAR PHOTO */}
          <div className="avatar">
            <div className="w-12 h-12 rounded-xl">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
