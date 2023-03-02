import usePosts from "../../hooks/usePost";
import { NoPostPage } from "../../pages/NoPostPage";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loading } from "../Loading/Loading";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

const PostList = ({ subject, userId }) => {
  const { posts, error, loading, removePost } = usePosts(subject, userId);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!posts.length) return <NoPostPage />;

  return (
    posts && (
      <main className="mainPostList">
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <PostCard post={post} removePost={removePost} />
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
};

export default PostList;
