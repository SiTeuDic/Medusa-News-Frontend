import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section>
      <h1>Página no encontrada</h1>
      <Link to="/">Ir a la página principal</Link>
    </section>
  );
};
