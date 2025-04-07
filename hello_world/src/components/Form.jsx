import { useState } from "react";

export const Form = ({ title, onSubmit, button }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formState.email, formState.password);
  };

  return (
    <>
      <h1>{title}</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={formState.email}
          onChange={onInputChange}
          autoComplete="username"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={formState.password}
          onChange={onInputChange}
          autoComplete="current-password"
        />
        <button type="submit">Continuar</button>
        <button type="button" onClick={button.onClick}>
          {button.text}
        </button>
      </form>
    </>
  );
};
