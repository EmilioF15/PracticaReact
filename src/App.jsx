import { useState, useEffect } from "react";
import "./App.css";

const gatitos = [
  { nombre: "soledad", edad: 12 },
  { nombre: "Gordito", edad: 22 },
];

function App() {
  const [user, setUser] = useState({ nombre: "Cargando", edad: "Cargando" }); //este guarda el usuario
  const [count, setCount] = useState(0);
  const [gatito, setGatito] = useState("Gordito"); //Este estado almacena el contador

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(gatitos);
        reject("ha ocurrido un error");
      }, 4000);
    });
    promesa.then((res) => console.log(res));
    setTimeout(() => {
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
      <h3>{gatito}</h3>
    </div>
  );
}

export default App;
