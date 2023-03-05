import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { postNewService } from "../Services";

import { useToast } from "../hooks/useToast";

const postInitialValue = {
  title: "",
  introduction: "",
  body: "",
  subject: "",
  image: "",
};

const useSendPost = () => {
  const { toastError, toastSuccess } = useToast();
  const [post, setPost] = useState(postInitialValue);
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
      toastSuccess("Noticia creada correctamente");
      navigate("/");
    } catch (error) {
      toastError(error.message);
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

    handleChange,
    handleSubmit,
    handleFile,
    imagePreview,
  };
};

export default useSendPost;
