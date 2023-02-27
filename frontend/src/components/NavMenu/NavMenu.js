import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavMenu = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="menuNav">
      {user ? (
        <ul>
          <li className="menuLi">
            <Link className="Link" to={`/user/${user.id}`}>
              <span className="avatarSpan">
                {user.profile_image ? (
                  <img
                    className="avatarAth"
                    src={`${process.env.REACT_APP_BACKEND}/uploads/profileImages/${user.profile_image}`}
                    alt="imagen de usuario"
                  />
                ) : (
                  <img
                    className="avatarAth"
                    src="/medusaUser.png"
                    alt=" medusaAvarat"
                  />
                )}
              </span>
              {user.user_name}
            </Link>
          </li>
          <li className="menuLi">
            <Link className="Link" to={"/createNew"}>
              Publicar Noticia
            </Link>
          </li>
          <li className="menuLi">
            <p
              className="userMenuL"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              LogOut
            </p>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="menuLi">
            <Link className="Link" to={"/register"}>
              Register
            </Link>
          </li>
          <li className="menuLi">
            <Link className="Link" to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavMenu;
