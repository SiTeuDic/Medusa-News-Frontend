import "./ErrorMessage.css";
import { RoughNotation } from "react-rough-notation";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="errorSection">
      <p className="errorP">{message}</p>
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
          Error
        </RoughNotation>
      </p>

      <img className="medusaError" src="/medusa_notFound.png" alt="" />
    </section>
  );
};

/* <section className="loadingSection">
      <p className="loading">Loading...</p>
      >
      <img className="gridLoad" src="/gridLoad.svg" alt="" />
    </section> */
