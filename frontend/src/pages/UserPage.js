import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loading } from "../components/Loading/Loading";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  console.log(user.profile_image);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Usuario {user.email}</h1>
      <section className="user-data">
        <p>Nombre: {user.name}</p>
        <p>
          Avatar:
          <img src={user.profile_image} alt="imagen de usuario" />
        </p>
        <p>Bio: {user.bio}</p>
        <p>Usuario desde: {user.created_at}</p>
      </section>
    </section>
  );
};
