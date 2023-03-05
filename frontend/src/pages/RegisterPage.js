import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../Services";
import Title from "../components/Title/Title";
import useFocus from "../hooks/useFocus";
import { RoughNotation } from "react-rough-notation";
import { useToast } from "../hooks/useToast";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToast();

  const [user_name, setUser_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const focUser = useFocus();
  const focEmail = useFocus();
  const focPass = useFocus();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await registerUserService({ user_name, email, password });
      toastSuccess("Registrado correctamente");
      navigate("/login");
    } catch (error) {
      toastError(error.message);
    }
  };
  return (
    <section>
      <Title text="Registro" />
      <section className="formSection">
        <form onSubmit={handleForm}>
          <fieldset>
            <label
              htmlFor="userName"
              className={focUser.focus ? "input focus" : "input"}
            >
              {focUser.focus ? (
                <RoughNotation
                  show={true}
                  type="underline"
                  padding={[-2, -2]}
                  strokeWidth="2"
                  animationDelay={500}
                  animationDuration={300}
                >
                  Usuario
                </RoughNotation>
              ) : (
                "Usuario"
              )}
            </label>
            <input
              className="post"
              type="text"
              id="userName"
              name="userName"
              value={user_name}
              required
              onChange={(e) => setUser_Name(e.target.value)}
              onFocus={focUser.onFocus}
              onBlur={focUser.onBlur}
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="email"
              className={focEmail.focus ? "input focus" : "input"}
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
              className="post"
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              onFocus={focEmail.onFocus}
              onBlur={focEmail.onBlur}
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="pass1"
              className={focPass.focus ? "input focus" : "input"}
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
              className="post"
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              onFocus={focPass.onFocus}
              onBlur={focPass.onBlur}
            />
          </fieldset>
          <button className="postButton">Register</button>
        </form>
      </section>
    </section>
  );
};
