import { RoughNotation } from "react-rough-notation";
import { VscCloudUpload } from "react-icons/vsc";
import useFocus from "../hooks/useFocus";
import useSendPost from "../hooks/useSendPost";
import Title from "../components/Title/Title";
const CreatePostPage = () => {
  const { post, handleChange, handleSubmit, handleFile, imagePreview } =
    useSendPost();

  const focTitle = useFocus();
  const focIntroduction = useFocus();
  const focText = useFocus();
  const focSubjet = useFocus();

  return (
    <section>
      <Title text={"¿Qué está pasando?"} />
      <section className="creaePostSection">
        <form onSubmit={handleSubmit}>
          <fieldset className="test">
            <label
              /* TODO: */
              className={focTitle.focus ? "test focus" : "test"}
              htmlFor="title"
            >
              {focTitle.focus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  Titulo
                </RoughNotation>
              ) : (
                "Titulo"
              )}
            </label>
            <input
              value={post.title}
              type="text"
              onChange={handleChange}
              onFocus={focTitle.onFocus}
              onBlur={focTitle.onBlur}
              id="title"
              name="title"
              className="post"
            />
          </fieldset>
          <fieldset>
            <label
              className={focIntroduction.focus ? "test focus" : "test"}
              htmlFor="title"
            >
              {focIntroduction.focus ? (
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
              value={post.introduction}
              type="text"
              onChange={handleChange}
              className="post"
              id="title"
              name="introduction"
              onFocus={focIntroduction.onFocus}
              onBlur={focIntroduction.onBlur}
            />
          </fieldset>
          <fieldset>
            <label
              className={focText.focus ? "test focus" : "test"}
              htmlFor="body"
            >
              {focText.focus ? (
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
              value={post.body}
              type="text"
              onChange={handleChange}
              className="post"
              id="body"
              name="body"
              onFocus={focText.onFocus}
              onBlur={focText.onBlur}
            />
          </fieldset>
          <fieldset>
            <label
              className={focSubjet.focus ? "test focus" : "test"}
              htmlFor="subject"
            >
              {focSubjet.focus ? (
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
              value={post.subject}
              type="text"
              onChange={handleChange}
              className="post"
              id="subject"
              name="subject"
              onFocus={focSubjet.onFocus}
              onBlur={focSubjet.onBlur}
            />
          </fieldset>

          <fieldset className="inpFieldset">
            {imagePreview ? (
              <div>
                <span className="previewSpan">
                  <img
                    className="previewImg"
                    src={imagePreview}
                    alt="preview"
                  />
                </span>

                <label className="imputImageLabel">
                  {"Cambiar la imagen "}
                  <VscCloudUpload className="cloud" />
                  <input
                    className="imageInput"
                    name="image"
                    type="file"
                    onChange={handleFile}
                  />
                </label>
              </div>
            ) : (
              <label className="imputImageLabel">
                {"Elige una imagen! "}
                <VscCloudUpload className="cloud" />
                <input
                  className="imageInput"
                  name="image"
                  type="file"
                  value={post.image}
                  onChange={handleFile}
                />
              </label>
            )}
          </fieldset>
          {post.error ? <p>{post.error}</p> : null}

          <button className="postButton">Enviar!</button>
        </form>
      </section>
    </section>
  );
};

export default CreatePostPage;
