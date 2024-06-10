import "./App.css";
import WithLoggin from "./components/Hocs/WithLoggin";
import Form from "./components/Formulario";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  const FormWithLoggin = WithLoggin(Form);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
