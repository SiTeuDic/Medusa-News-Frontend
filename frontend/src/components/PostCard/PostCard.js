import Body from "../Body/Body";
import Subject from "../Subject/Subject";
import TitlePost from "../TitlePost/TitlePost";
import Vote from "../Vote/Vote";
import ImagePost from "../ImagePost/ImagePost";
import "./PostCard.css";
import Published from "../Published/Published";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <article className="postCard">
      <Subject subject={post.subject} />
      <Published userId={post.user_id} date={post.create_date} />
      {post.image && <ImagePost imgName={post.image} title={post.title} />}
      <TitlePost title={post.title} id={post.id} />
      <Body body={post.body} />
      <Vote vote={post.upVote} id={post.id} />
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
