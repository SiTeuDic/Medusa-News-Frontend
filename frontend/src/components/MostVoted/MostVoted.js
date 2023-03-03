import usePosts from "../../hooks/usePost";
import { NoPostPage } from "../../pages/NoPostPage";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loading } from "../Loading/Loading";
import VotedCard from "../VotedCard/VotedCard";
import "../PostList/PostList.css";

const MostVoted = ({ subject, userId }) => {
  const { posts, error, loading } = usePosts(subject, userId);

  console.log(posts);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!posts.length) return <NoPostPage />;

  const sortedPosts = [...posts].sort((a, b) => +b.upVote - +a.upVote);

  return (
    sortedPosts && (
      <main className="mainPostList">
        <ul>
          {sortedPosts.map((post) => {
            return (
              <li key={post.id}>
                <VotedCard post={post} />
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
};

export default MostVoted;
