import PostList from "../components/PostList/PostList";
import SearchBySubject from "../components/SearchBySubject/SearchBySubject";
import Title from "../components/Title/Title";
import MenuUser from "../components/menuUser/menuUser";

export const HomePage = () => {
  return (
    <section className="PageSection">
      <Title text={"Noticias"} />
      <PostList />
      <aside>
        <SearchBySubject />
        <MenuUser />
      </aside>
    </section>
  );
};
