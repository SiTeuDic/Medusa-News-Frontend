import { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useNavigate } from "react-router-dom";
import useFocus from "../../hooks/useFocus";
import { getPostsBySubjectService } from "../../Services";

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
    <section className="formSection">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label
            className={focSearch.focus ? "input focus" : "input"}
            htmlFor="search"
          >
            {focSearch.focus ? (
              <RoughNotation
                show={true}
                type="underline"
                padding={[-2, -2]}
                strokeWidth="2"
                animationDelay={500}
                animationDuration={300}
              >
                Buscar:
              </RoughNotation>
            ) : (
              "Buscar:"
            )}
          </label>
          <input
            className="post"
            type="text"
            placeholder="Introduce un tema"
            id="search"
            name="search"
            onFocus={focSearch.onFocus}
            onBlur={focSearch.onBlur}
            onChange={(e) => setSubject(e.target.value)}
          />
        </fieldset>
        <button type="submit" className="postButton">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default SearchBySubject;
