import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loading } from "../components/Loading/Loading";
import useUser from "../hooks/useUser";
import { GrEdit } from "react-icons/gr/index";
import RegistredAt from "../components/RegistredAt/RegistredAt";
import Title from "../components/Title/Title";
import { RoughNotation } from "react-rough-notation";
import useFocus from "../hooks/useFocus";
import { useState } from "react";
export const EditProfilePage = () => {
  const { userId } = useParams();
  const { user, loading, error } = useUser(userId);
  console.log(user);
  const focBio = useFocus();
  const focName = useFocus();

  const [curentName, setCurrentName] = useState(user.name);
  // console.log("[CurrentUSer]: ", currentUser.user.id);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="userSection">
      <form>
        <ul className="userSection">
          <li>
            <Title text={user.user_name} />
          </li>

          <li className="avatarUserli">
            <fieldset className="inpFieldset">
              <label>
                <GrEdit className="editImgIcon" />
                {user.profile_image ? (
                  <>
                    <img
                      className="avatarUser"
                      src={`${process.env.REACT_APP_BACKEND}/uploads/profileImages/${user.profile_image}`}
                      alt="imagen de usuario"
                    />
                  </>
                ) : (
                  <img
                    className="avatarUser"
                    src="/medusaUser.png"
                    alt=" medusaAvarat"
                  />
                )}
                <input className="imageInput" name="image" type="file" />
              </label>
            </fieldset>
          </li>
          <li>
            <fieldset>
              <label
                className={focName.focus ? "input focus" : "input"}
                htmlFor="name"
              >
                {focName.focus ? (
                  <RoughNotation
                    show={true}
                    type="underline"
                    padding={[-2, -2]}
                    strokeWidth="2"
                    animationDelay={500}
                    animationDuration={300}
                  >
                    Nombre
                  </RoughNotation>
                ) : (
                  "Nombre"
                )}
              </label>
              <input
                value={curentName}
                type="text"
                className="post"
                id="name"
                name="name"
                onFocus={focName.onFocus}
                onBlur={focName.onBlur}
                onChange={(e) => setCurrentName(e.target.value)}
              />
            </fieldset>
          </li>
          <li>
            <fieldset className="input">
              <label
                className={focBio.focus ? "input focus" : "input"}
                htmlFor="title"
              >
                {focBio.focus ? (
                  <RoughNotation
                    show={true}
                    type="underline"
                    padding={[-2, -2]}
                    strokeWidth="2"
                    animationDelay={500}
                    animationDuration={300}
                  >
                    Biografía
                  </RoughNotation>
                ) : (
                  "Biografía"
                )}
              </label>
              <textarea
                value={user.bio ?? "Cuéntanos sobre ti"}
                type="text"
                onFocus={focBio.onFocus}
                onBlur={focBio.onBlur}
                id="title"
                name="title"
                className="post"
              />
            </fieldset>
          </li>
          <li>
            <button>Enviar</button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default EditProfilePage;
