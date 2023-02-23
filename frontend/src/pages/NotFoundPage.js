import { RoughNotation } from "react-rough-notation";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section className="notFoundSection">
      <Link to="/" className="notFoundLink">
        {"Ir a la página "}
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
      <p className="notFoundText">
        <RoughNotation
          type="circle"
          show={true}
          color="black"
          strokeWidth={"1.5"}
          animationDelay={1000}
          animationDuration={"700"}
          iterations="3"
          padding={[2, 10]}
        >
          404
        </RoughNotation>
      </p>
      <img className="notFoundImg" src="/medusa_notFound.png" alt="" />
    </section>
  );
};
