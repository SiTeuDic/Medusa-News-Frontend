import { Link } from "react-router-dom";
import useTimeAgo from "../../hooks/useTimeAgo";
import useUser from "../../hooks/useUser";

import "./Published.css";

const Published = ({ userId, date }) => {
  const { user, error, loading } = useUser(userId);

  // const { dateTime, timeAgo } = useTimeAgo(date);
  const timeAgo = useTimeAgo(date);

  return (
    <p className="published">
      {`Publicado ${timeAgo} por `}
      <b className="b">
        <Link className="linkUser" to={`/user/${user.id}`}>
          {user.user_name}
        </Link>
      </b>
    </p>
  );
};

export default Published;