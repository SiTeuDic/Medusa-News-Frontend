import TitlePost from "../TitlePost/TitlePost";
import Vote from "../Vote/Vote";
import "../PostCard/PostCard.css";

const PostCard = ({ post }) => {
  return (
    <article className="postCard">
      <TitlePost title={post.title} id={post.id} />
      <Vote vote={post.upVote} id={post.id} />
    </article>
  );
};

export default PostCard;
