import Body from "../Body/Body";
import ImagePost from "../ImagePost/ImagePost";
import Introduction from "../Introduction/Introduction";
import Published from "../Published/Published";
import Subjects from "../Subjects/Subjects";
import Title from "../Title/Title";
import Vote from "../Vote/Vote";
import "./Post.css";

const Post = ({
  title,
  introduction,
  imgName,
  body,
  subjects,
  upVote,
  id,
  userId,
  date,
}) => {
  return (
    <article className="post-article">
      <Published userId={userId} date={date} />
      <Title title={title} id={id} />
      <Introduction introduction={introduction} />
      {imgName && <ImagePost imgName={imgName} />}
      <Body body={body} />
      {subjects && <Subjects subjects={subjects} />}
      <Vote vote={upVote} />
    </article>
  );
};

export default Post;
