import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFocus from "../../hooks/useFocus";
import { getPostsBySubjectService } from "../../Services";
import "./SearchBySubject.css";
const SearchBySubject = () => {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();
  const focSearch = useFocus();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getPostsBySubjectService(subject);
    navigate(`/subject/${subject}`);
  };

  return (
    <section className="subjectSection">
      <form className="formSubjectSection" onSubmit={handleSubmit}>
        <fieldset className="searchFormFieldset">
          <label className="postSubjectInput" htmlFor="search">
            Buscar
          </label>
          <input
            className="postSubject"
            type="text"
            placeholder="Introduce un tema"
            id="search"
            name="search"
            onFocus={focSearch.onFocus}
            onBlur={focSearch.onBlur}
            onChange={(e) => setSubject(e.target.value)}
          />
        </fieldset>
        <button type="submit" className="postSubjectButton">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default SearchBySubject;
