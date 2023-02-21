import { RoughNotation } from "react-rough-notation";
import "./Title.css";
const Title = ({ text }) => {
  return (
    <RoughNotation
      show={true}
      animationDelay={500}
      animationDuration={1000}
      iterations={3}
      padding={[4, 0]}
    >
      <h2>{text}</h2>
    </RoughNotation>
  );
};

export default Title;
