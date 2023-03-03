import PostList from "../components/PostList/PostList";
import SearchBySubject from "../components/SearchBySubject/SearchBySubject";
import Title from "../components/Title/Title";
import MostVoted from "../components/MostVoted/MostVoted";

export const HomePage = () => {
  return (
    <section>
      <SearchBySubject />
      <MostVoted />
      <Title text={"Noticias"} />
      <PostList />
    </section>
  );
};
