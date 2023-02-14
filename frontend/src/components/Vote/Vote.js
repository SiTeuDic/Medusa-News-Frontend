import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { upVotePostService } from "../../Services";
import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";

import "./Vote.css";

const Vote = ({ vote, id }) => {
  //TODO: Hacer un hook que haga toda la logica y saque la media de votos
  const { token, user } = useContext(AuthContext);
  const handlerclickUp = () => {
    console.log("[VoteUp]: ", id);
    upVotePostService(id, token);
  };

  const handlerclickDown = () => {
    console.log("[VoteDown]: ", id);
  };

  return (
    <span className="listVote">
      {user && (
        <>
          <p className="buttonvote" onClick={handlerclickUp}>
            <ImArrowUp2 />
          </p>

          <p className="buttonvote" onClick={handlerclickDown}>
            <ImArrowDown2 />
          </p>
        </>
      )}

      <p className="vote">{vote ?? "0"} </p>
    </span>
  );
};

export default Vote;
