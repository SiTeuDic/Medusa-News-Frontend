import { VscCloudUpload } from "react-icons/vsc";

import useFocus from "../../hooks/useFocus";
import useSendPost from "../../hooks/useSendPost";
import "./CreatePost.css";

import TextFocus from "../TextFocus/TextFocus";

const CreatePost = () => {
  const { post, handleChange, handleSubmit, handleFile, imagePreview } =
    useSendPost();

  const focTitle = useFocus();
  const focIntroduction = useFocus();
  const focText = useFocus();
  const focSubjet = useFocus();

  return (
    <section className="formSection">
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
            className={focIntroduction.focus ? "input focus" : "input"}
            htmlFor="title"
          >
            <TextFocus text="Introducción" state={focIntroduction.focus} />
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
            className={focText.focus ? "input focus" : "input"}
            htmlFor="body"
          >
            <TextFocus text="Texto" state={focText.focus} />
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
          {imagePreview ? (
            <div>
              <span className="previewSpan">
                <img className="previewImg" src={imagePreview} alt="preview" />
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
  );
};

export default CreatePost;
