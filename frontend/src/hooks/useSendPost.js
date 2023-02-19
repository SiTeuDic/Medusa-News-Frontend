import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { postNewService } from "../Services";

const postInitialValue = {
  title: "",
  introduction: "",
  body: "",
  subject: "",
  image: "",
};

const useSendPost = () => {
  const [post, setPost] = useState(postInitialValue);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState();

  const { token } = useContext(AuthContext);

  const handleChange = ({ target }) => {
    setPost({
      ...post,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postNewService(post, token);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFile = ({ target }) => {
    const imputImage = target.files[0];
    setPost({
      ...post,
      image: imputImage,
    });
    setImagePreview(URL.createObjectURL(imputImage));

    // converto fichero en ruta con URL.createObjectURL(file)
  };
  return {
    post,
    error,
    handleChange,
    handleSubmit,
    handleFile,
    imagePreview,
  };
};

export default useSendPost;
