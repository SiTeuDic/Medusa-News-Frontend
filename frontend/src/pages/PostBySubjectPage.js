import { useParams } from "react-router-dom";
import PostList from "../components/PostList/PostList";

export const PostBySubjectPage = () => {
  const { subject } = useParams();
  console.log("[PostBySubjectPage]: ", subject);
  return (
    <section>
      <h2 className="bySubjecth2">{subject.toLocaleUpperCase()}</h2>
      <PostList subject={subject} />
    </section>
  );
};
