import Body from "../Body/Body";
import Subject from "../Subject/Subject";
import Title from "../Title/Title";
import Vote from "../Vote/Vote";
import ImagePost from "../ImagePost/ImagePost";
import "./PostCard.css";
import Published from "../Published/Published";

const PostCard = ({
  title,
  body,
  vote,
  subject,
  userId,
  date,
  imgName,
  id,
}) => {
  return (
    <article className="postCard">
      <Subject subject={subject} />
      <Published userId={userId} date={date} />
      {imgName && <ImagePost imgName={imgName} title={title} />}
      <Title title={title} id={id} />
      <Body body={body} />
      <Vote vote={vote} id={id} />
    </article>
  );
};

export default PostCard;
