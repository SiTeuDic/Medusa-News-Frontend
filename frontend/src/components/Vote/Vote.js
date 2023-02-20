import "./Vote.css";
import useVote from "../../hooks/useVote";
import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";

const Vote = ({ vote, id }) => {
  const { user, handleLikeClick, handleDisikeClick, upVote } = useVote(
    id,
    vote
  );

  return (
    <span className="listVote">
      {user && (
        <>
          <p className={`buttonVote`} onClick={handleLikeClick}>
            <ImArrowUp2 />
          </p>

          <p className="buttonVote" onClick={handleDisikeClick}>
            <ImArrowDown2 />
          </p>
        </>
      )}

      <p className="vote">{upVote} </p>
    </span>
  );
};

export default Vote;
