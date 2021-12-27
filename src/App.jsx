import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Index from "./routes/Index";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareasBusqueda, settareasBusqueda] = useState([]);
  const [modoEditando, setModoEditando] = useState(false);

  const EstablecerTarea = (task) => {
    setTareas([...tareas, task]);
    settareasBusqueda([...tareasBusqueda, task]);
    console.log(task);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Index
                setTareas={setTareas}
                EstablecerTarea={EstablecerTarea}
                settareasBusqueda={settareasBusqueda}
                tareas={tareas}
                tareasBusqueda={tareasBusqueda}
                modoEditando={modoEditando}
                setModoEditando={setModoEditando}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
