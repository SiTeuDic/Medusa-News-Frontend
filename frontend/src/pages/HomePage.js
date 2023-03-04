import PostList from "../components/PostList/PostList";
import SearchBySubject from "../components/SearchBySubject/SearchBySubject";
import Title from "../components/Title/Title";
import MostVoted from "../components/MostVoted/MostVoted";
import MenuUser from "../components/menuUser/menuUser";

export const HomePage = () => {
  return (
    <section className="PageSection">
      <MostVoted />
      <aside>
        <SearchBySubject />
        <MenuUser />
      </aside>
      <Title text={"Noticias"} />
      <PostList />
    </section>
  );
};
