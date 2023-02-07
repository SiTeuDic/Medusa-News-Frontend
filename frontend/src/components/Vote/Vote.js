import "./Vote.css";

const Vote = ({ vote }) => {
  return (
    <div className="voteDiv">
      <p className="vote">⬆️</p>
      <p className="vote">⬇️</p>

      <p className="vote">{vote}</p>
    </div>
  );
};

export default Vote;
