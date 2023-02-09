import Body from "../Body/Body";
import Subject from "../Subject/Subject";
import Title from "../Title/Title";
import Vote from "../Vote/Vote";
import Image from "../Image/Image";
import "./PostCard.css";

const PostCard = ({ title, body, vote, subject }) => {
  return (
    <article className="postCard">
      <Subject subject={subject} />
      <p className="publicado">
        Publicado hace 2 horas por <b>Nacho</b>
      </p>
      <Image />
      <Title title={title} />
      <Body body={body} />
      <Vote vote={vote} />
    </article>
  );
};

export default PostCard;
