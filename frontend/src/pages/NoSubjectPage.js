import { RoughNotation } from "react-rough-notation";
import { Link } from "react-router-dom";

export const NoSubjectPage = () => {
  return (
    <section className="notFoundSection">
      <Link to="/" className="notFoundLink">
        {"Volver a "}
        <RoughNotation
          strokeWidth={"2"}
          show={true}
          type="underline"
          padding={[1, 0]}
          color="black"
        >
          Inicio
        </RoughNotation>
      </Link>
      <h2 className="titeleNFP notFoundText">
        <RoughNotation
          type="underline"
          show={true}
          color="black"
          strokeWidth={"1.5"}
          animationDelay={1000}
          animationDuration={"700"}
          iterations="3"
          padding={[2, 10]}
        >
          No hay temas
        </RoughNotation>
      </h2>
      <img className="notFoundImg" src="/medusa_notFound.png" alt="" />
    </section>
  );
};
