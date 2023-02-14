import Body from "../Body/Body";
import ImagePost from "../ImagePost/ImagePost";
import Introduction from "../Introduction/Introduction";
import Published from "../Published/Published";
import Subject from "../Subject/Subject";
import Title from "../Title/Title";
import Vote from "../Vote/Vote";
import "./Post.css";

const Post = ({
  title,
  introduction,
  imgName,
  body,
  subject,
  upVote,
  id,
  userId,
  date,
}) => {
  return (
    <article className="post-article">
      <Subject subject={subject} />
      <Published userId={userId} date={date} />
      <Title title={title} id={id} />
      <Introduction introduction={introduction} />
      {imgName && <ImagePost imgName={imgName} />}
      <Body body={body} />
      <Vote vote={upVote} />
    </article>
  );
};

export default Post;
