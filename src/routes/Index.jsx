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
}) => {
  return (
    <>
      <Navbar
        
        setTareas={setTareas}
        tareasBusqueda={tareasBusqueda}
      />
      
      <div className="container">
        <div className="row">
            <Formulario
            EstablecerTarea={EstablecerTarea}
            />
            <Tareas tareas={tareas}/>
        </div>
      </div>
    </>
  );
};

export default Index;
