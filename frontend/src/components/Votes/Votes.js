import "./Votes.css";
import { GiJellyfish } from "react-icons/gi";

const Votes = ({ vote }) => {
  return (
    <span className="listVote">
      <p className="buttonVote">
        <GiJellyfish />
      </p>
      <p className="vote">{vote} </p>
    </span>
  );
};

export default Votes;
