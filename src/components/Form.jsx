import { useState } from "react";

export default function Form() {
  const [ingreso, setIngreso] = useState({ nombre: "", password: "" });
  const [alerts, setAlerts] = useState({ nombre: "", password: "" });

  const handleChange = (e) => {
    setIngreso({
      ...ingreso,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    let nuevoObjeto = {
      nombre: ingreso.nombre.length < 6 ? "Nombre demasiado corto" : "",
      password: ingreso.password.length < 6 ? "Contraseña demasiado corta" : "",
    };

    if (nuevoObjeto.nombre !== "" || nuevoObjeto.password !== "") {
      setAlerts(nuevoObjeto);
      alert("Hay errores");
    } else {
      setAlerts({ nombre: "", password: "" });
      alert("Salio todo bien");
    }
  };

  return (
    <div>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" onChange={handleChange} />
      {alerts.nombre ? <label>{alerts.nombre}</label> : null}
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      {alerts.password ? <label>{alerts.password}</label> : null}
      <button onClick={() => handleLogin()}>Ingresar</button>
    </div>
  );
}
