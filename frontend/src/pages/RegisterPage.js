import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../Services";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [user_name, setUser_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await registerUserService({ user_name, email, password });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Registro</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="userName">Usuario</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user_name}
            required
            onChange={(e) => setUser_Name(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
