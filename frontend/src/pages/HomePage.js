import PostList from "../components/PostList/PostList";
import useFetch from "../hooks/useFetch";

export const HomePage = () => {
  return (
    <section>
      <h1>Noticias</h1>
      <PostList />
    </section>
  );
};
