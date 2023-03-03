import usePosts from "../../hooks/usePost";
import { NoPostPage } from "../../pages/NoPostPage";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loading } from "../Loading/Loading";
import VotedCard from "../VotedCard/VotedCard";
import "../PostList/PostList.css";
import Title from "../Title/Title";
import "./MostVoted.css";
import { useEffect, useState } from "react";

const MostVoted = ({ subject, userId }) => {
  const { posts, error, loading } = usePosts(subject, userId);
  const [vote, setVote] = useState(posts.upVote);

  useEffect(() => {
    const updatedVotes = () => {
      const votes = posts.upVote;
      setVote(votes);
    };
    updatedVotes();
  }, [posts.upVote]);

  //console.log(posts);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!posts.length) return <NoPostPage />;

  const sortedPosts = [...posts].sort((a, b) => +b.upVote - +a.upVote);

  return (
    sortedPosts && (
      <main className="mostVoted">
        <Title clasname="mostVotedTitle" text={"Más Votadas"} />
        <ul>
          {sortedPosts.map((post) => {
            return (
              <li key={post.id}>
                <VotedCard post={post} votes={vote} />
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
};

export default MostVoted;