import "./App.css";
import WithLoggin from "./components/Hocs/WithLoggin";
import Form from "./components/Formulario";

function App() {

  const FormWithLoggin = WithLoggin(Form);

  return (
    <>
    <h2>Pero la puta madre</h2>
      <FormWithLoggin/>
    </>
  );

}


export default App;
