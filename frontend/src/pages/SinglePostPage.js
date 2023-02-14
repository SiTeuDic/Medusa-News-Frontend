import { useParams } from "react-router-dom";
import Post from "../components/Post/Post";
import useFetch from "../hooks/useFetch";

const SinglePostPage = () => {
  const param = useParams();
  const post = useFetch(`${process.env.REACT_APP_BACKEND}/new/${param.id}`);
  console.log("[Post]: ", post);
  return (
    post && (
      <Post
        id={post.data.id}
        title={post.data.title}
        introduction={post.data.introduction}
        imgName={post.data.image}
        body={post.data.body}
        subject={post.data.subject}
        upVote={post.data.upVote}
        date={post.data.create_date}
        userId={post.data.user_id}
      />
    )
  );
};

export default SinglePostPage;
