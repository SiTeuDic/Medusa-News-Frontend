import { Link } from "react-router-dom";
import "./Subject.css";

const Subject = ({ subject }) => {
  return (
    <Link to={`/subject/${subject}`}>
      <span className="subject">{subject.toUpperCase()}</span>
    </Link>
  );
};

export default Subject;
