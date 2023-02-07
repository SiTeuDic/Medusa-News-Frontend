import "./Subject.css";

const Subject = ({ subject }) => {
  return (
    <span className="subject">
      <ul className="subjectList">
        <li className="subjectListItem">{subject}</li>
        <li className="subjectListItem">{subject}</li>
        <li className="subjectListItem">{subject}</li>
      </ul>
    </span>
  );
};

export default Subject;
