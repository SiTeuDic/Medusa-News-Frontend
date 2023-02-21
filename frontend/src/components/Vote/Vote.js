import "./Vote.css";
import useVote from "../../hooks/useVote";
import { GiJellyfish } from "react-icons/gi";

const Vote = ({ vote, id }) => {
  const { user, handleLikeClick, upVote, btnActive } = useVote(id, vote);

  return (
    <span className="listVote">
      {user ? (
        <p
          className={btnActive ? "buttonVote active" : "buttonVote"}
          onClick={handleLikeClick}
        >
          <GiJellyfish />
        </p>
      ) : (
        <p className="buttonVote blur">
          <GiJellyfish />
        </p>
      )}

      <p className="vote">{upVote} </p>
    </span>
  );
};

export default Vote;
