import { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setAlert({
        msg: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }
    if (
      nombre == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == ""
    ) {
      setAlert({
        msg: "Favor, llenar todos los campos...",
        color: "danger",
      });
      return;
    }

    setAlert({
      msg: "Cuenta creada exitosamente...",
      color: "success",
    });
    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <form onSubmit={validarDatos} class="text-center">
        <div>
          <input class="mb-2"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <input class="mb-2"
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input class="mb-2"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input class="mb-2"
            type="password"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" class="btn btn-success mt-2 px-5">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
