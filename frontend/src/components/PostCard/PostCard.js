import Body from "../Body/Body";
import Subject from "../Subject/Subject";
import TitlePost from "../TitlePost/TitlePost";
import Vote from "../Vote/Vote";
import ImagePost from "../ImagePost/ImagePost";
import "./PostCard.css";
import Published from "../Published/Published";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import GrEdit from "react-icons/gr/index";

const PostCard = ({ post }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <article className="postCard">
      <Subject subject={post.subject} />
      <Published userId={post.user_id} date={post.create_date} />
      {post.image && <ImagePost imgName={post.image} title={post.title} />}
      <TitlePost title={post.title} id={post.id} />
      <Body body={post.body} />
      <Vote vote={post.upVote} id={post.id} />
      {/* {user.id && (
        <span
          className="editSpan"
          onClick={() => navigate(`/editNew/${post.id}`)}
        >
          <GrEdit />
        </span>
      )} */}
    </article>
  );
};

export default PostCard;

/* return (
  <article className="postCard">
    <Subject subject={post.subject} />
    <Published userId={post.userId} date={post.create_date} />
    {post.imgName && <ImagePost imgName={post.imgName} title={post.title} />}
    <Title title={post.title} id={post.id} />
    <Body body={post.body} />
    <Vote vote={post.vote} id={post.id} />
  </article>
); */
