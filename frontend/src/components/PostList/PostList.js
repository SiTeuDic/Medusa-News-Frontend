import usePosts from "../../hooks/usePost";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loading } from "../Loading/Loading";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

const PostList = ({ subject, userId }) => {
  const { posts, error, loading } = usePosts(subject, userId);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  return (
    posts && (
      <main className="mainPostList">
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
};

export default PostList;
