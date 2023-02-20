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
        <nav className="menuNav">
          {user ? (
            <ul>
              <li className="menuLi">
                <Link className="userMenuL" to={`/user/${user.id}`}>
                  {user.user_name}
                </Link>
              </li>
              <li className="menuLi">
                <button onClick={() => logout()}>Logout</button>
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
      )}
    </section>
  );
};
