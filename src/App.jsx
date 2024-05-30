import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ nombre: "Cargando", edad: "Cargando" }); //este guarda el usuario
  const [count, setCount] = useState(0); //Este estado almacena el contador

  useEffect(() => {
    setTimeout(() => {
      setUser({ nombre: "loading", edad: "loading" });
      setUser({ nombre: "Emilio", edad: 25 });
    }, 3000);
    return setUser({ nombre: "Cargando", edad: "Cargando" });
  }, [count]);

  function increaseCount() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h2>Nombre : {user.nombre}</h2>
      <h2>Edad: {user.edad}</h2>
      <button onClick={increaseCount}>incrementar Contador</button>
      <h4>{count}</h4>
      <button onClick={resetCount}>Reiniciar Contador</button>
    </div>
  );
}

export default App;
