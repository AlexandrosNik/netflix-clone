import React, { useEffect, useState } from "react";
import logo from "../../icons/netflix_logo.png";
import avatar from "../../icons/avatar.png";
import "./Nav.css";

export default function Nav() {
  const [scrollBg, setScrollBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScrollBg(true) : setScrollBg(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${scrollBg ? "bgBlack" : ""}`}>
      <div className="nav-bar__left">
        <img className="nav__logo" src={logo} alt="Netflix Logo" />
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <a href="#">Home</a>
          </li>
          <li className="nav-bar__item">
            <a href="#">TV Shows</a>
          </li>
          <li className="nav-bar__item">
            <a href="#">Movies</a>
          </li>
          <li className="nav-bar__item">
            <a href="#">Latest</a>
          </li>
          <li className="nav-bar__item">
            <a href="#">My List</a>
          </li>
        </ul>
      </div>
      <div className="nav-bar__right">
        <img className="nav__avatar" src={avatar} alt="Netflix Logo" />
      </div>
    </div>
  );
}
