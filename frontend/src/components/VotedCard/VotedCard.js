import Votes from "../Votes/Votes";
import "./VotedCard.css";
import "../PostCard/PostCard.css";

const VoteCard = ({ post, votes }) => {
  return (
    <article className="postCard">
      <h3 className="postTitle">{post.title}</h3>
      <Votes vote={votes} id={post.id} />
    </article>
  );
};

export default VoteCard;
