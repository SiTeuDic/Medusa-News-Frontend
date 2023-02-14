import { Link } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import "./Header.css";

export const Header = () => {
  return (
    <header style={{ backgroundImage: " url(/door.jpg)" }}>
      <img className="imgHeader" src="medusa.png" alt="" />
      <h1 className="titleHeader">
        <Link className="titleHeader" to="/">
          MEDUSA NEWS
        </Link>
      </h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
