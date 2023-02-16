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
      <h2 className="titeleNFP">Página no encontrada</h2>
      <img className="notFoundImg" src="/medusa_notFound.png" alt="" />

      <p className="notFoundText">
        <RoughNotation
          type="circle"
          show={true}
          color="black"
          strokeWidth={"1.5"}
          animationDelay={1000}
          animationDuration={"2000"}
          iterations="6"
          padding={[2, 10]}
        >
          404
        </RoughNotation>
      </p>
    </section>
  );
};
