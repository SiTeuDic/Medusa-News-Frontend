import Title from "../components/Title/Title";
import CreatePost from "../components/CreatePost/CreatePost";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const CreatePostPage = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.token) navigate("/login");
  }, [navigate, user]);
  return (
    <section className="createPostSection">
      <Title text={"¿Qué está pasando?"} />
      <CreatePost />
    </section>
  );
};

export default CreatePostPage;
