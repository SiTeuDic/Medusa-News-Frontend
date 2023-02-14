import "./Subjects.css";

const Subjects = ({ subjects }) => {
  return (
    <>
      {subjects &&
        subjects.map((subject) => {
          return <span className="subject">{subject.subject}</span>;
        })}
    </>
  );
};

export default Subjects;
