import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Auth.css";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  return (
    <section>
      <GiHamburgerMenu onClick={() => setMenu(!menu)} />
      {menu && (
        <div className="containerNav" onClick={() => setMenu(!menu)}>
          <nav className="menuNav">
            {user ? (
              <ul>
                <li className="menuLi">
                  <Link className="userMenuL" to={`/user/${user.id}`}>
                    <span className="avatarSpan">
                      {user.profile_image ? (
                        <img
                          className="avatarAth"
                          src={user.profile_image}
                          alt="imagen de usuario"
                        />
                      ) : (
                        <img
                          className="avatarAth"
                          src="/medusa.png"
                          alt=" medusaAvarat"
                        />
                      )}
                    </span>
                    {user.user_name}
                  </Link>
                </li>
                <li className="menuLi">
                  <Link className="userMenuL" to={"/createNew"}>
                    Publicar Noticia
                  </Link>
                </li>
                <li className="menuLi">
                  <p className="userMenuL" onClick={() => logout()}>
                    LogOut
                  </p>
                </li>
              </ul>
            ) : (
              <ul>
                <li className="menuLi">
                  <Link className="userMenuL" to={"/register"}>
                    Register
                  </Link>
                </li>
                <li className="menuLi">
                  <Link className="userMenuL" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      )}
    </section>
  );
};
