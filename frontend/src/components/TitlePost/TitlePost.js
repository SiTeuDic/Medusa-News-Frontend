import { Link } from "react-router-dom";
import "./TitlePost.css";

const TitlePost = ({ title, id }) => {
  return (
    <h2 className="title">
      <Link className="titleLink" to={`/new/${id}`}>
        {title}
      </Link>
    </h2>
  );
};

export default TitlePost;
