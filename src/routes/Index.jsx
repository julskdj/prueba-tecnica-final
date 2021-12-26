import React from "react";
import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";
import Tareas from "../components/Tareas";

const Index = ({
  setTareas,
  EstablecerTarea,
  settareasBusqueda,
  tareas,
  tareasBusqueda,
  modoEditando,
  setModoEditando,
}) => {
  return (
    <>
      <Navbar setTareas={setTareas} tareasBusqueda={tareasBusqueda} />

      <div className="container">
        <div className="row">
          <Formulario
            EstablecerTarea={EstablecerTarea}
            modoEditando={modoEditando}
            setModoEditando={setModoEditando}
            tareas={tareas}
          />
          <Tareas
            tareas={tareas}
            setTareas={setTareas}
            tareasBusqueda={tareasBusqueda}
            settareasBusqueda={settareasBusqueda}
            setModoEditando={setModoEditando}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
