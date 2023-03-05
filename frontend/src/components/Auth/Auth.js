import { useState } from "react";

import NavMenu from "../NavMenu/NavMenu";

import { GiHamburgerMenu } from "react-icons/gi";

import "./Auth.css";

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
