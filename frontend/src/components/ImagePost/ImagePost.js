import "./ImagePost.css";

const Image = ({ imgName, title }) => {
  return (
    <img
      className="imgPost"
      src={`${process.env.REACT_APP_BACKEND}/uploads/newsImages/${imgName}`}
      alt={title}
    />
  );
};

export default Image;
