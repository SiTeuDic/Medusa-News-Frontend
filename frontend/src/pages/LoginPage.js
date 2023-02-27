import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { logInUserService } from "../Services";
import useFocus from "../hooks/useFocus";

import TextFocus from "../components/TextFocus/TextFocus";
import Title from "../components/Title/Title";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const focEmail = useFocus();
  const focPass = useFocus();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const token = await logInUserService({ email, password });
      console.log(token);
      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <Title text="LogIn" />

      <section className="formSection">
        <form onSubmit={handleForm}>
          <fieldset>
            <label
              htmlFor="email"
              className={focEmail.focus ? "input focus" : "input"}
            >
              <TextFocus text="Email" state={focEmail.focus} />
            </label>
            <input
              className="post"
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              onFocus={focEmail.onFocus}
              onBlur={focEmail.onBlur}
            />
          </fieldset>
          <fieldset>
            <label
              className={focPass.focus ? "input focus" : "input"}
              htmlFor="pass"
            >
              <TextFocus text="Password" state={focPass.focus} />
            </label>
            <input
              className="post"
              type="password"
              name="pass"
              id="pass"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              onFocus={focPass.onFocus}
              onBlur={focPass.onBlur}
            />
          </fieldset>

          <button className="postButton">Login</button>
          {error ? <p>{error}</p> : null}
        </form>
      </section>
    </section>
  );
};
