import Votes from "../Votes/Votes";
import "./VotedCard.css";
import { Link } from "react-router-dom";
import "../PostCard/PostCard.css";

const VoteCard = ({ post, votes }) => {
  return (
    <article className="postCard">
      <h3 className="postTitle">
        <Link className="titleLink" to={`/new/${post.id}`}>
          {post.title}
        </Link>
      </h3>
      <Votes vote={votes} id={post.id} />
    </article>
  );
};

export default VoteCard;
