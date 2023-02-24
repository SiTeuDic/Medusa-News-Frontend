import { RoughNotation } from "react-rough-notation";
import Title from "../components/Title/Title";

const Unauthorized = () => {
  return (
    <section className="notFoundSection">
      <Title text="¿Qué buscas por aquí?" />
      <p className="notFoundText">
        <RoughNotation
          type="circle"
          show={true}
          color="black"
          strokeWidth={"1.5"}
          animationDelay={500}
          animationDuration={"7"}
          iterations="3"
          padding={[2, 10]}
        >
          401
        </RoughNotation>
      </p>
      <RoughNotation
        className="testSpan"
        type="strike-through"
        show={true}
        color="black"
        strokeWidth={"25"}
        animationDelay={1000}
        animationDuration={"1500"}
      ></RoughNotation>
      <img className="notFoundImg" src="/medusa_notFound.png" alt="" />
    </section>
  );
};

export default Unauthorized;
