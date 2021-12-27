import React from "react";
import eliminarTarea from "../functions/eliminarTarea.jsx";
import cambiarEstado from "../functions/cambiarEstado.jsx";
import editarTarea from "../functions/editarTarea";

const Tareas = ({
  tareas,
  setTareas,
  tareasBusqueda,
  settareasBusqueda,
  setModoEditando,
}) => {
  return (
    <>
      <div className="col-md-6 tareas-div">
        <br />

        <h2>Lista de Tareas</h2>
        <br />

        {tareas && tareas.length == 0 ? (
          <div className="alert alert-primary">No hay Tareas</div>
        ) : (
          tareas.map(({ titulo, descripcion, id, completado }) =>
            completado ? (
              <div key={id} className="card text-white bg-success mb-3 tareas">
                <div className="card-header">ㅤ</div>
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                  <p className="card-text">{descripcion} - Completada</p>
                  <button
                    className="btn btn-danger"
                    onClick={(e) =>
                      eliminarTarea(
                        id,
                        setTareas,
                        tareas,
                        tareasBusqueda,
                        settareasBusqueda,
                        setModoEditando
                      )
                    }
                  >
                    Eliminar
                  </button>
                  <span> </span>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => editarTarea(id, setModoEditando)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="card text-white bg-secondary mb-3 tareas"
                key={id}
              >
                <div className="card-header">ㅤ</div>
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                  <p className="card-text">{descripcion} - Sin Completar</p>
                  <button
                    className="btn btn-danger"
                    onClick={(e) =>
                      eliminarTarea(
                        id,
                        setTareas,
                        tareas,
                        tareasBusqueda,
                        settareasBusqueda,
                        setModoEditando
                      )
                    }
                  >
                    Eliminar
                  </button>
                  <span> </span>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => editarTarea(id, setModoEditando)}
                  >
                    Editar
                  </button>
                  <span> </span>
                  <button
                    className="btn btn-success"
                    onClick={(e) => cambiarEstado(id, tareas, setTareas)}
                  >
                    Completar
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </>
  );
};

export default Tareas;
