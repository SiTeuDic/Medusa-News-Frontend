import usePosts from "../../hooks/usePost";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loading } from "../Loading/Loading";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

const PostList = ({ subject }) => {
  const { posts, error, loading } = usePosts(subject);
  console.log("[psotList]: ", subject);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <main className="mainPostList">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <PostCard
                title={post.title}
                id={post.id}
                introduction={post.introduction}
                image={post.image}
                body={post.body}
                subject={post.subject}
                userId={post.user_id}
                vote={post.upVote}
                date={post.create_date}
                imgName={post.image}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default PostList;
