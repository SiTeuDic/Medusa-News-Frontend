import Body from "../Body/Body";
import Subject from "../Subject/Subject";
import TitlePost from "../TitlePost/TitlePost";
import Vote from "../Vote/Vote";
import Introduction from "../Introduction/Introduction";
import ImagePost from "../ImagePost/ImagePost";
import "./PostCard.css";
import Published from "../Published/Published";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { GrEdit } from "react-icons/gr/index";
import { BsFillEraserFill } from "react-icons/bs/index";
import { deletePostServer } from "../../Services";
import { NotFoundPage } from "../../pages/NotFoundPage";

const PostCard = ({ post, removePost, intro }) => {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!post) {
    return <NotFoundPage />;
  }

  const deletePost = async (postId) => {
    try {
      deletePostServer(postId, token);
      if (removePost) {
        removePost(post.id);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="postCard">
      <Subject subject={post.subject} />
      <Published userId={post.user_id} date={post.create_date} />
      {post.image && <ImagePost imgName={post.image} title={post.title} />}
      <TitlePost title={post.title} id={post.id} />
      {intro && <Introduction introduction={post.introduction} />}
      <Body body={post.body} />
      <Vote vote={post.upVote} id={post.id} />
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
                  "Quieres borrar la noticia para siempre? (Eso es mucho tiempo)"
                )
              ) {
                deletePost(post.id, token);
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

/* 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast('¿Estás seguro de que deseas realizar esta acción?', {
  position: "bottom-right",
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  closeButton: false,
  buttons: [
    {
      label: 'OK',
      onClick: () => {
        // Aquí se ejecuta la función cuando se hace clic en el botón "OK"
      }
    },
    {
      label: 'Cancelar',
      onClick: () => {
        // Aquí se ejecuta la función cuando se hace clic en el botón "Cancelar"
      }
    }
  ]
});



*/

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
