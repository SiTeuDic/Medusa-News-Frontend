import { useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import "./Header.css";

export const Header = () => {
  const [header, setHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 170) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={header ? "mainHeader active" : "mainHeader"}
      style={{ backgroundImage: " url(/door.jpg)" }}
    >
      <img
        className={header ? "imgHeader active" : "imgHeader"}
        src="medusa.png"
        alt=""
      />
      <h1 className={header ? "titleHeader active" : "titleHeader"}>
        <Link className=" Link titleHeader" to="/">
          MEDUSA
        </Link>
      </h1>
      <nav className={header ? "authNav active" : "authNav"}>
        <Auth />
      </nav>
    </header>
  );
};
