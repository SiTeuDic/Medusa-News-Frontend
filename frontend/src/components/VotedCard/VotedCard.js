import TitlePost from "../TitlePost/TitlePost";
import Votes from "../Votes/Votes";
import "../PostCard/PostCard.css";

const VoteCard = ({ post }) => {
  return (
    <article className="postCard">
      <TitlePost title={post.title} id={post.id} />
      <Votes vote={post.upVote} id={post.id} />
    </article>
  );
};

export default VoteCard;
