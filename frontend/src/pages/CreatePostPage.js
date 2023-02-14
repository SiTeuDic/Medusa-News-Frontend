import { useContext, useState } from "react";
import { postNewService } from "../Services";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [body, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await postNewService({ title, introduction, body, subject, token });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>¿Qué esta pasando? </h1>
      <section className="creaePostSection">
        <form onSubmit={handleForm}>
          <fieldset>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="title">Introduccion</label>
            <input
              type="text"
              id="title"
              name="title"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="body">Texto</label>
            <textarea
              type=""
              id="body"
              name="body"
              value={body}
              onChange={(e) => setText(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="subject">Tema</label>
            <input
              type="subject"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </fieldset>
          {error ? <p>{error}</p> : null}
          <button>Enviar!</button>
        </form>
      </section>
    </>
  );
};

export default CreatePostPage;
