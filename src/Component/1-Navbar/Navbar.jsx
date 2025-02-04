import { useEffect, useState } from "react";
import "./Navbar.css";
const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  });
  return (
    <header className="flex">
      <button
        onClick={() => setShowModel(true)}
        className="menu icon-menu flex"></button>
      <img src="logo1.png" className="logo" />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articals</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mood flex">
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}{" "}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModel(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articals</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
