import { useParams } from "react-router-dom";
import MenuUser from "../components/menuUser/menuUser";
import PostList from "../components/PostList/PostList";
import SearchBySubject from "../components/SearchBySubject/SearchBySubject";
import Title from "../components/Title/Title";

export const PostBySubjectPage = () => {
  const { subject } = useParams();

  return (
    <section className="PageSection">
      <Title text={subject.toLocaleUpperCase()} />

      <PostList subject={subject} />
      <aside>
        <SearchBySubject />
        <MenuUser />
      </aside>
    </section>
  );
};
