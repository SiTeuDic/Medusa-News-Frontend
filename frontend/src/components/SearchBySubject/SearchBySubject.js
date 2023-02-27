import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPostsBySubjectService } from "../../Services";

const SearchBySubject = () => {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getPostsBySubjectService(subject);
    navigate(`/subject/${subject}`);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Buscar:
          <input
            type="text"
            placeholder="Introduce un tema"
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default SearchBySubject;
