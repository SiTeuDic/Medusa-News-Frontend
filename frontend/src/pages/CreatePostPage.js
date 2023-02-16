import { useContext, useState } from "react";
import { postNewService } from "../Services";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

const CreatePostPage = () => {
  const useFocus = () => {
    const [focus, setFocus] = useState(false);

    return { focus, setFocus };
  };

  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [body, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const { focus: titleFocus, setFocus: setTitleFocus } = useFocus();
  const { focus: introductionFocus, setFocus: setIntroductionFocus } =
    useFocus();
  const { focus: textFocus, setFocus: setTextFocus } = useFocus();
  const { focus: subjectFocus, setFocus: setSubjectFocus } = useFocus();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await postNewService({
        title,
        introduction,
        body,
        subject,
        image,
        token,
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    // converto fichero en ruta con URL.createObjectURL(file)
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <>
      <h1>¿Qué esta pasando? </h1>
      <section className="creaePostSection">
        <form onSubmit={handleForm}>
          <fieldset className="test">
            <label
              className={titleFocus ? "test focus" : "test"}
              htmlFor="title"
            >
              {titleFocus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  {" "}
                  Titulo
                </RoughNotation>
              ) : (
                "Titulo"
              )}
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              className="post"
              onFocus={() => setTitleFocus(!titleFocus)}
              onBlur={() => setTitleFocus(!titleFocus)}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label
              className={introductionFocus ? "test focus" : "test"}
              htmlFor="title"
            >
              {introductionFocus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  Introducción
                </RoughNotation>
              ) : (
                "Introducción"
              )}
            </label>
            <input
              className="post"
              type="text"
              id="title"
              name="title"
              value={introduction}
              onFocus={() => setIntroductionFocus(!introductionFocus)}
              onBlur={() => setIntroductionFocus(!introductionFocus)}
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label className={textFocus ? "test focus" : "test"} htmlFor="body">
              {textFocus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  Texto
                </RoughNotation>
              ) : (
                "Texto"
              )}
            </label>
            <textarea
              className="post"
              type=""
              id="body"
              name="body"
              value={body}
              onFocus={() => setTextFocus(!textFocus)}
              onBlur={() => setTextFocus(!textFocus)}
              onChange={(e) => setText(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label
              className={subjectFocus ? "test focus" : "test"}
              htmlFor="subject"
            >
              {subjectFocus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  Tema
                </RoughNotation>
              ) : (
                "Tema"
              )}
            </label>
            <input
              className="post"
              type="subject"
              id="subject"
              name="subject"
              value={subject}
              onFocus={() => setSubjectFocus(!subjectFocus)}
              onBlur={() => setSubjectFocus(!subjectFocus)}
              onChange={(e) => setSubject(e.target.value)}
            />
          </fieldset>
          <label className="img-picker">
            <span>Imagen:</span>
            <input
              className="image-picker"
              name="image"
              type="file"
              onChange={handleFile}
            />
            {imagePreview && (
              <img className="previewImg" src={imagePreview} alt="preview" />
            )}
          </label>
          {error ? <p>{error}</p> : null}

          <button>Enviar!</button>
        </form>
      </section>
    </>
  );
};

export default CreatePostPage;
