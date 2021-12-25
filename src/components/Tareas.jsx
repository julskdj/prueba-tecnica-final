import React from "react";

const Tareas = ({ tareas }) => {
  return (
    <>
      <div className="col-md-6">
        <br />
        <br />

        <h2>Lista de Tareas</h2>
        <br />
        {tareas && tareas.length == 0 ? (
          <div className="alert alert-primary">No hay Tareas</div>
        ) : (
          tareas.map(({ titulo, descripcion, id }) => (
            <div key={id} className="card text-left md-2">
              <div className="card-body">
                <h4 className="card-title">{titulo}</h4>
                <p className="card-text">{descripcion}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Tareas;
