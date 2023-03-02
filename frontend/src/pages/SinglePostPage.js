import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard/PostCard";
import useFetch from "../hooks/useFetch";

const SinglePostPage = () => {
  const param = useParams();
  const post = useFetch(`${process.env.REACT_APP_BACKEND}/new/${param.id}`);
  return post && <PostCard post={post.data} intro={true} />;
};

export default SinglePostPage;
