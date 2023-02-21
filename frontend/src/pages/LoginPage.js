import { useContext, useState } from "react";
import { RoughNotation } from "react-rough-notation";

import { useNavigate } from "react-router-dom";
import Title from "../components/Title/Title";
import { AuthContext } from "../context/AuthContext";
import useFocus from "../hooks/useFocus";
import { logInUserService } from "../Services";

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

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <Title text={"LogIn"} />

      <section className="loginSection">
        <form onSubmit={handleForm}>
          <fieldset>
            <label
              className={focEmail.focus ? "test focus" : "test"}
              htmlFor="email"
            >
              {focEmail.focus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  Email
                </RoughNotation>
              ) : (
                "Email"
              )}
            </label>
            <input
              className="loginInput"
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
              className={focPass.focus ? "test focus" : "test"}
              htmlFor="pass"
            >
              {focPass.focus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  Password
                </RoughNotation>
              ) : (
                "Password"
              )}
            </label>
            <input
              className="loginInput"
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

          <button className="loginButton">Login</button>
          {error ? <p>{error}</p> : null}
        </form>
      </section>
    </section>
  );
};
