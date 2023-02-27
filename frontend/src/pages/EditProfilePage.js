import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loading } from "../components/Loading/Loading";
import useUser from "../hooks/useUser";
import { GrEdit } from "react-icons/gr/index";
//import RegistredAt from "../components/RegistredAt/RegistredAt";
import Title from "../components/Title/Title";
import { RoughNotation } from "react-rough-notation";
import useFocus from "../hooks/useFocus";
import { useContext, useState } from "react";
import { updateProfileService } from "../Services";
import { AuthContext } from "../context/AuthContext";

export const EditProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { user, loading, error } = useUser(userId);
  const { token } = useContext(AuthContext);
  //console.log(user);
  const focBio = useFocus();
  const focName = useFocus();
  const focPassword = useFocus();
  const focConfirmPassword = useFocus();

  const [currentName, setCurrentName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(user.profile_image);
  // console.log("[CurrentUSer]: ", currentUser.user.id);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfileService(
        userId,
        currentName,
        bio,
        image,
        newPassword,
        confirmPassword,
        token
      );
      navigate(`/user/${user.id}`);
    } catch (error) {
      <ErrorMessage message={error} />;
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  console.log(currentName, bio, newPassword, confirmPassword);

  return (
    <section className="formSection">
      <form onSubmit={handleSubmit}>
        <ul>
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
                    alt="medusaAvatar"
                  />
                )}
                <input
                  className="imageInput"
                  name="image"
                  type="file"
                  onChange={handleFile}
                />
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
                value={currentName}
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
                value={bio}
                type="text"
                onFocus={focBio.onFocus}
                onBlur={focBio.onBlur}
                id="title"
                name="title"
                className="post"
                onChange={(e) => setBio(e.target.value)}
              />
            </fieldset>
          </li>
          <li>
            <fieldset>
              <label
                className={focPassword.focus ? "input focus" : "input"}
                htmlFor="newPassword"
              >
                {focPassword.focus ? (
                  <RoughNotation
                    show={true}
                    type="underline"
                    padding={[-2, -2]}
                    strokeWidth="2"
                    animationDelay={500}
                    animationDuration={300}
                  >
                    Contraseña
                  </RoughNotation>
                ) : (
                  "Contraseña"
                )}
              </label>
              <input
                className="post"
                type="password"
                name="newPassword"
                id="newPassword"
                onFocus={focPassword.onFocus}
                onBlur={focPassword.onBlur}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </fieldset>
          </li>
          <li>
            <fieldset>
              <label
                className={focConfirmPassword.focus ? "input focus" : "input"}
                htmlFor="confirmPassword"
              >
                {focConfirmPassword.focus ? (
                  <RoughNotation
                    show={true}
                    type="underline"
                    padding={[-2, -2]}
                    strokeWidth="2"
                    animationDelay={500}
                    animationDuration={300}
                  >
                    Repítela
                  </RoughNotation>
                ) : (
                  "Repítela"
                )}
              </label>
              <input
                className="post"
                value={confirmPassword}
                type="password"
                name="confirmsPassword"
                id="confirmPassword"
                onFocus={focConfirmPassword.onFocus}
                onBlur={focConfirmPassword.onBlur}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </fieldset>
          </li>
          <li>
            <button className="postButton">Enviar</button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default EditProfilePage;
