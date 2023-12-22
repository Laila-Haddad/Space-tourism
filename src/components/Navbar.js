import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "/assets/logo_48x48.png";
import { List, X } from "react-bootstrap-icons";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function handleMenuOpen() {
    const navMenu = document.querySelector(".nav-menu");
    setMenu(true);
    navMenu.classList.add("open");
  }

  function handleMenuClose() {
    const navMenu = document.querySelector(".nav-menu");
    setMenu(false);
    navMenu.classList.remove("open");
  }

  useEffect(() => {
    const navMenu = document.querySelector(".nav-menu");
    window.addEventListener(
      "click",
      (e) => {
        if (menu && e.target.parentElement.id !== "menu-open-btn") {
          setMenu(false);
          navMenu.classList.remove("open");
          console.log("clicked", e.target.parentElement.id);
        }
      },
      [menu]
    );
  });

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img
            src="/assets/logo_48x48.png"
            alt="space tourism"
            title="space tourism"
            className="nav-icon"
          />
        </Link>
      </div>

      <div className="nav-decor"></div>
      <div>
        <button
          id="menu-open-btn"
          className="menu-open"
          onClick={handleMenuOpen}
        >
          <List color="#d0d6f9" size={40} />
        </button>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>
            <X
              id="menu-close-btn"
              className="menu-close"
              color="#d0d6f9"
              size={60}
              onClick={handleMenuClose}
            />
          </li>
          <div className="menu-text">
            <li>
              <Link to="/">
                <span>
                  <b>00</b>
                </span>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <span>
                  <b>01</b>
                </span>{" "}
                Destination
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <span>
                  <b>02</b>
                </span>{" "}
                Crew
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <span>
                  <b>03</b>
                </span>{" "}
                Technology
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      {/* <div className="menu-bar">
        <span>
          <b>00</b> Home
        </span>
        <span>
          <b>01</b> Destination
        </span>
        <span>
          <b>02</b> Crew
        </span>
        <span>
          <b>03</b> Technology
        </span>
      </div> */}
    </header>
  );
}
