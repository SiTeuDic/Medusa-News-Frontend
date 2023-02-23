import PostList from "../components/PostList/PostList";
import Title from "../components/Title/Title";

export const HomePage = () => {
  return (
    <section>
      <Title text={"Noticias"} />

      <PostList />
    </section>
  );
};
