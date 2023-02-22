import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loading } from "../components/Loading/Loading";
import { Name } from "../components/Name/Name";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Usuario {user.email}</h1>
      <section className="user-data">
        <span>
          Nombre : <Name />
        </span>
        <figure>
          Avatar:
          <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/profileImages/${user.profile_image}`}
            alt={`${user.name}`}
          />
        </figure>
        <p>Bio: {user.bio}</p>
        <p>Usuario desde: {new Date(user.created_at).toLocaleString()}</p>
      </section>
    </section>
  );
};
