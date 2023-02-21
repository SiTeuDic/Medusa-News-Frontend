import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loading } from "../components/Loading/Loading";
import useUser from "../hooks/useUser";
import PostList from "../components/PostList/PostList";

import RegistredAt from "../components/RegistredAt/RegistredAt";
import Title from "../components/Title/Title";
export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  console.log(user.id);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  console.log("user", user);
  return (
    <section className="userSection">
      <ul className="userSection">
        <li>
          <Title text={user.user_name} />
        </li>
        <li className="avatarUserli">
          {user.profile_image ? (
            <img
              className="avatarUser"
              src={user.profile_image}
              alt="imagen de usuario"
            />
          ) : (
            <img className="avatarUser" src="/medusa.png" alt=" medusaAvarat" />
          )}
        </li>
        <li>
          <p>Biografía</p>
        </li>
        <li>
          <p className="biografiaP">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nisi,
            pellentesque dis suscipit nunc facilisi etiam ad magnis, enim turpis
            scelerisque quisque cum aliquam blandit. Hac lobortis eleifend dui
            fermentum posuere semper natoque, consequat sed ut ornare aliquet
            sollicitudin, id elementum class erat potenti interdum. Felis ac
            hendrerit fermentum est feugiat viverra sagittis, donec morbi taciti
            eu porttitor nibh laoreet convallis, faucibus class per quis lacinia
            integer. Laoreet nascetur urna ultrices cursus malesuada felis
            turpis, consequat cras congue quam dictumst rutrum nisi vitae,
            rhoncus odio viverra aenean mi nam
          </p>
        </li>
        <li>
          <RegistredAt date={user.created_at} />
        </li>
        <PostList userId={user.id} />
      </ul>
    </section>
  );
};
