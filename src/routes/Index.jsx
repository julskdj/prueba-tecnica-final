import React from "react";
import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";
import Tareas from "../components/Tareas";

const Index = ({
  setTareas,
  EstablecerTarea,
  settareasBusqueda,
  tareas,
  busqueda,
  tareasBusqueda,
  cambiarEstado,
  eliminarTarea,
}) => {
  return (
    <>
      <Navbar setTareas={setTareas} tareasBusqueda={tareasBusqueda} />

      <div className="container">
        <div className="row">
          <Formulario EstablecerTarea={EstablecerTarea} />
          <Tareas
            tareas={tareas}
            cambiarEstado={cambiarEstado}
            setTareas={setTareas}
            eliminarTarea={eliminarTarea}
            tareasBusqueda={tareasBusqueda}
            settareasBusqueda={settareasBusqueda}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
