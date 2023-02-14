import "./Vote.css";

const Vote = ({ vote }) => {
  console.log("[Vote]: ", vote);
  return (
    <ul className="listVote">
      <li className="elementlist">
        <p className="vote">+</p>
      </li>
      <li className="elementlist">
        <p className="vote">-</p>
      </li>
      <li className="elementlist">
        <p className="voteNum">{vote}</p>
      </li>
    </ul>
  );
};

export default Vote;
