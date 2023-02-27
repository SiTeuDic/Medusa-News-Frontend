import PostList from "../components/PostList/PostList";
import SearchBySubject from "../components/SearchBySubject/SearchBySubject";
import Title from "../components/Title/Title";

export const HomePage = () => {
  return (
    <section>
      <SearchBySubject />
      <Title text={"Noticias"} />
      <PostList />
    </section>
  );
};
