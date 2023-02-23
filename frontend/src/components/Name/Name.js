import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Name = () => {
  const { user } = useContext(AuthContext);

  return <p>{user.name}</p>;
};
