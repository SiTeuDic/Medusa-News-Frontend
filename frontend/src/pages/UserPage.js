import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loading } from "../components/Loading/Loading";
//import { Name } from "../components/Name/Name";
import useUser from "../hooks/useUser";
import PostList from "../components/PostList/PostList";
import { BiEdit } from "react-icons/bi/index";
import RegistredAt from "../components/RegistredAt/RegistredAt";
import Title from "../components/Title/Title";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const UserPage = () => {
  const { id } = useParams();
  const userId = id ? parseInt(id) : null;
  const { user, loading, error } = useUser(userId);
  const currentUser = useContext(AuthContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="userSection">
      <ul className="userSection">
        {/* TODO: compobar que funciona SIEMPRE*/}

        {currentUser.user?.id === userId && (
          <li className="editProfile">
            <Link
              className="editProfile"
              to={`/editProfile/${currentUser.user.id}`}
            >
              <BiEdit />
            </Link>
          </li>
        )}
        <li>
          <Title text={user.user_name} />
        </li>
        <li className="avatarUserli">
          {user.profile_image ? (
            <img
              className="avatarUser"
              src={`${process.env.REACT_APP_BACKEND}/uploads/profileImages/${user.profile_image}`}
              alt="imagen de usuario"
            />
          ) : (
            <img
              className="avatarUserDefault"
              src="/medusaUser.png"
              alt=" medusaAvarat"
            />
          )}
        </li>
        {user.name && <li>{user.name}</li>}
        {user.bio && (
          <li>
            <p className="biografiaP">{user.bio}</p>
          </li>
        )}
        <li>
          <RegistredAt date={user.created_at} />
        </li>
        <PostList userId={user.id} />
      </ul>
    </section>
  );
};
