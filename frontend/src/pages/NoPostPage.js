import { RoughNotation } from "react-rough-notation";
import { Link } from "react-router-dom";

export const NoPostPage = () => {
  return (
    <section className="PageSectionNoPost">
      <Link to="/createNew" className="notFoundLink">
        {"Crea una "}
        <RoughNotation
          strokeWidth={"2"}
          show={true}
          type="underline"
          padding={[1, 0]}
          color="black"
        >
          Publicación
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
          Todavía no hay noticias
        </RoughNotation>
      </h2>
      <img className="notPostImg" src="/medusaNoPost.png" alt="" />
    </section>
  );
};
