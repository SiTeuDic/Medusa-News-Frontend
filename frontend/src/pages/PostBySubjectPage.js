import { useParams } from "react-router-dom";
import MenuUser from "../components/menuUser/menuUser";
import PostList from "../components/PostList/PostList";
import SearchBySubject from "../components/SearchBySubject/SearchBySubject";
import Title from "../components/Title/Title";

export const PostBySubjectPage = () => {
  const { subject } = useParams();

  return (
    <section className="PageSection">
      <aside>
        <SearchBySubject />
        <MenuUser />
      </aside>
      <Title text={subject.toLocaleUpperCase()} />

      <PostList subject={subject} />
    </section>
  );
};
