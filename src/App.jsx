import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Index from "./routes/Index";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareasBusqueda, settareasBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const EstablecerTarea = (task) => {
    setTareas([...tareas, task]);
    settareasBusqueda([...tareasBusqueda, task]);
    console.log(task);
  };

  const cambiarEstado = (id) => {
    setTareas(tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completado = !tarea.completado;
      }
      return tarea;
    }))
  }

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
                cambiarEstado={cambiarEstado}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
