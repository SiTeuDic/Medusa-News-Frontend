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
import { GrEdit } from "react-icons/gr/index";
import { BsFillEraserFill } from "react-icons/bs/index";
import { deletePostServer } from "../../Services";

const PostCard = ({ post }) => {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <article className="postCard">
      <Subject subject={post.subject} />
      <Published userId={post.user_id} date={post.create_date} />
      {post.image && <ImagePost imgName={post.image} title={post.title} />}
      <TitlePost title={post.title} id={post.id} />
      <Body body={post.body} />
      <Vote vote={post.upVote} id={post.id} />
      {/* TODO: compobar que funciona SIEMPRE*/}
      {user?.id === post.user_id && (
        <article className="editArticle">
          <span
            className="editSpan"
            onClick={() => navigate(`/editPost/${post.id}`)}
          >
            <GrEdit />
          </span>
          <span
            className="editSpan"
            onClick={() => {
              if (
                window.confirm(
                  "Quieres borrar la noticia para siempre?(Eso es mucho tiempo)"
                )
              ) {
                deletePostServer(post.id, token);
              }
            }}
          >
            <BsFillEraserFill />
          </span>
        </article>
      )}
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
