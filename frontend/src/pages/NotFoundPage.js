import { RoughNotation } from "react-rough-notation";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section className="notFoundSection">
      <Link to="/">
        Ir a la página
        <RoughNotation
          strokeWidth={"2"}
          show={true}
          type="underline"
          padding={[1, 0]}
          color="black"
        >
          principal
        </RoughNotation>
      </Link>
      <img className="notFoundImg" src="/medusa.png" alt="" />

      <p className="notFoundText">
        <RoughNotation
          type="circle"
          show={true}
          color="black"
          strokeWidth={"1.5"}
          animationDelay={1000}
          animationDuration={"1000"}
          iterations="3"
          padding={[1, 10]}
        >
          404
        </RoughNotation>
      </p>
      <h1>Página no encontrada</h1>

      {/* <h1>Página no encontrada</h1>
      <RoughNotation
        type="strike-through"
        show={true}
        color="black"
        strokeWidth="20"
        animationDelay={"1000"}
        animationDuration={"500"}
        padding={[0, 0]}
      >
        <img className="notFoundImg" src="/medusa.png" alt="" />
      </RoughNotation> */}
    </section>
  );
};
