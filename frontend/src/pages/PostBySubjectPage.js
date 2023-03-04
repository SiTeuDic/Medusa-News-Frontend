import { useParams } from "react-router-dom";
import PostList from "../components/PostList/PostList";
import Title from "../components/Title/Title";

export const PostBySubjectPage = () => {
  const { subject } = useParams();

  return (
    <section className="PageSection">
      <Title text={subject.toLocaleUpperCase()} />
      <PostList subject={subject} />
    </section>
  );
};
