import PostList from "../components/PostList/PostList";
import useFetch from "../hooks/useFetch";

export const HomePage = () => {
  return (
    <section>
      <h2>Noticias</h2>
      <PostList />
    </section>
  );
};
