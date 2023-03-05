import { RoughNotation } from "react-rough-notation";
import "./loading.css";

export const Loading = () => {
  return (
    <section className="loadingSection">
      <RoughNotation
        className="loadingSpan"
        show={true}
        type="circle"
        padding={[10, 10]}
        animationDuration={50000}
        strokeWidth={1}
        iterations="100"
      ></RoughNotation>
    </section>
  );
};
