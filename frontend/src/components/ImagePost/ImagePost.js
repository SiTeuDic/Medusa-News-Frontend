import "./ImagePost.css";

const Image = ({ imgName, title }) => {
  const url = `${process.env.REACT_APP_BACKEND}/uploads/newsImages/${imgName}`;
  console.log(url);
  return (
    <img
      className="imgPost"
      src={`${process.env.REACT_APP_BACKEND}/uploads/newsImages/${imgName}`}
      alt={title}
    />
  );
};

export default Image;
