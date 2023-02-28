import { useParams } from "react-router-dom";

import useFocus from "../hooks/useFocus";
import useEditPost from "../hooks/useEditPost";
import TextFocus from "../components/TextFocus/TextFocus";
import { VscCloudUpload } from "react-icons/vsc";

const EditPostPage = () => {
  const { id } = useParams();
  const { post, handleChange, handleSubmit, handleFile, imagePreview } =
    useEditPost(id);

  const focTitle = useFocus();
  const focIntroduction = useFocus();
  const focText = useFocus();
  const focSubjet = useFocus();

  return (
    <>
      <section className="formSection">
        {post && (
          <form onSubmit={handleSubmit}>
            <fieldset className="input">
              <label
                className={focTitle.focus ? "input focus" : "input"}
                htmlFor="title"
              >
                <TextFocus text={"Titulo"} state={focTitle.focus} />
              </label>
              <input
                value={post.title}
                type="text"
                onFocus={focTitle.onFocus}
                onBlur={focTitle.onBlur}
                id="title"
                name="title"
                className="post"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <label
                className={focIntroduction.focus ? "input focus" : "input"}
                htmlFor="title"
              >
                <TextFocus text="Introducción" state={focIntroduction.focus} />
              </label>
              <input
                value={post.introduction}
                type="text"
                className="post"
                id="title"
                name="introduction"
                onFocus={focIntroduction.onFocus}
                onBlur={focIntroduction.onBlur}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <label
                className={focText.focus ? "input focus" : "input"}
                htmlFor="body"
              >
                <TextFocus text="Texto" state={focText.focus} />
              </label>
              <textarea
                value={post.body}
                type="text"
                className="post"
                id="body"
                name="body"
                onFocus={focText.onFocus}
                onBlur={focText.onBlur}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <label
                className={focSubjet.focus ? "input focus" : "input"}
                htmlFor="subject"
              >
                <TextFocus text="Tema" state={focSubjet.focus} />
              </label>
              <input
                value={post.subject}
                type="text"
                className="post"
                id="subject"
                name="subject"
                onFocus={focSubjet.onFocus}
                onBlur={focSubjet.onBlur}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="inpFieldset">
              {post.image ? (
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
                    value={imagePreview}
                    onChange={handleFile}
                  />
                </label>
              )}
            </fieldset>

            <button className="postButton">Enviar!</button>
          </form>
        )}
      </section>
    </>
  );
};

export default EditPostPage;
