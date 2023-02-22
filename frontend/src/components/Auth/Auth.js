import { GiHamburgerMenu } from "react-icons/gi";
import "./Auth.css";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";

export const Auth = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section>
      <GiHamburgerMenu onClick={() => setMenu(!menu)} />
      {menu && (
        <div className="containerNav" onClick={() => setMenu(!menu)}>
          <NavMenu />
        </div>
      )}
    </section>
  );
};
