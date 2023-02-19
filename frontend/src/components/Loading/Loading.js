import "./loading.css";

export const Loading = () => {
  return (
    <section className="loadingSection">
      <p className="loading">Loading...</p>
      <img className="medusa" src="/medusa.png" alt="" />
      <img className="gridLoad" src="/gridLoad.svg" alt="" />
    </section>
  );
};
