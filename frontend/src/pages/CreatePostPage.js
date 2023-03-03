import Title from "../components/Title/Title";
import CreatePost from "../components/CreatePost/CreatePost";
const CreatePostPage = () => {
  return (
    <section className="createPostSection">
      <Title text={"¿Qué está pasando?"} />
      <CreatePost />
    </section>
  );
};

export default CreatePostPage;
