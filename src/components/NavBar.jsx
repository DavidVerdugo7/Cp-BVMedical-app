import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";

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
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <div className="navbar bg-base-100 mb-1" style={navbarStyles}>
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to="/home">
            VBMedical
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/history">🗂️ &nbsp; &nbsp; Today’s Work</Link>
              </li>
              <li className="mt-5">
                <Link to="/home">🔎 &nbsp; &nbsp; ID Search</Link>
              </li>
              <li className="mt-5">
                <Link to="/aboutus">🩻 &nbsp; &nbsp; About Us</Link>
              </li>
              <hr
                className="mt-40"
                style={{ width: "80%", height: "2px", backgroundColor: "#000" }}
              />

              <li className="mt-5">
                <Link to="/login">Close session</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
