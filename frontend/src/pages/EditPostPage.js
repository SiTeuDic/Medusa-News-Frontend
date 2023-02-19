import { RoughNotation } from "react-rough-notation";

import { VscCloudUpload } from "react-icons/vsc";

import useFocus from "../hooks/useFocus";
import useField from "../hooks/useSendPost";
import { getSinglePostService } from "../Services";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditPostPage = () => {
  const [currentPost, setCurrentPost] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const loadCurrentPost = async () => {
      try {
        const currentPost = await getSinglePostService(id);
        console.log("[CreatePostPage]:", currentPost);
        setCurrentPost(currentPost);
        setCurrentImage(URL.createObjectURL(currentPost.image));
      } catch (error) {
        console.log(error);
      }
    };
    loadCurrentPost();
  }, [id]);
  const { post, handleChange, handleSubmit, handleFile, imagePreview } =
    useField();

  const focTitle = useFocus();
  const focIntroduction = useFocus();
  const focText = useFocus();
  const focSubjet = useFocus();

  return (
    <>
      <h2>¿Qué esta pasando? </h2>
      <section className="creaePostSection">
        <form onSubmit={handleSubmit}>
          <fieldset className="test">
            <label
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
              value={currentPost.title}
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
              value={currentPost.introduction}
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
              value={currentPost.body}
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
              value={currentPost.subject}
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
            {currentImage !== null ? (
              <div>
                <span className="previewSpan">
                  <img
                    className="previewImg"
                    src={imagePreview}
                    alt="preview"
                  />
                </span>

                <label className="imputImageLabel">
                  {"Elige una imagen! "}
                  <VscCloudUpload className="cloud" />
                  <input
                    value={currentImage}
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
                  value={currentImage}
                  onChange={handleFile}
                />
              </label>
            )}
          </fieldset>
          {post.error ? <p>{post.error}</p> : null}

          <button className="postButton">Enviar!</button>
        </form>
      </section>
    </>
  );
};

export default EditPostPage;
