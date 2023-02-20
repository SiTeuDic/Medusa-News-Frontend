import "./ErrorMessage.css";
import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="errorSection">
      <h2>Error</h2>
      <Link to={"/"}>Go to home</Link>

      <img className="medusaError" src="/medusa.png" alt="" />
      <p className="errorP">{message}</p>
    </section>
  );
};

/* <section className="loadingSection">
      <p className="loading">Loading...</p>
      >
      <img className="gridLoad" src="/gridLoad.svg" alt="" />
    </section> */
