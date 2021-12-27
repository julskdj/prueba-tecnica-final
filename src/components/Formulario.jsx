import React, { useState } from "react";
import peticion from "../functions/peticion";

const Formulario = ({
  EstablecerTarea,
  modoEditando,
  setModoEditando,
  tareas,
  setTareas,
  settareasBusqueda,
  tareasBusqueda,
}) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [numero, setNumero] = useState("");
  const [error, setError] = useState(false);
  const [errorGatos, setErrorGatos] = useState({ vacio: false, numero: false });

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (titulo.trim() === "" || descripcion.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    EstablecerTarea({
      titulo,
      descripcion,
      id: shortid.generate(),
      completado: false,
    });

    e.target.reset();
    setTitulo("");
    setDescripcion("");
  };

  const resetForm = (e) => {
    setTitulo("");
    setDescripcion("");
    setModoEditando(false);
    e.target.reset();
  };

  const editarTareaForm = (e) => {
    e.preventDefault();

    if (descripcion.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    const found = tareas.find((tarea) => tarea.id === modoEditando.id);
    found.descripcion = descripcion;

    setModoEditando(false);
    setTitulo("");
    setDescripcion("");
    e.target.reset();
  };

  const traerGatos = async (e) => {
    e.preventDefault();

    if (numero === "") {
      setErrorGatos({ vacio: true, numero: false });
      setNumero("");
      e.target.reset();
      return;
    }

    if (isNaN(numero)) {
      setErrorGatos({ vacio: false, numero: true });
      setNumero("");
      e.target.reset();
    } else {
      setErrorGatos({ vacio: false, numero: false });

      const arreglo = await peticion(numero);

      setTareas([...tareas, ...arreglo]);
      settareasBusqueda([...tareasBusqueda, ...arreglo]);

      setNumero("");
      e.target.reset();
    }
  };

  return (
    <>
      <div className="col-md-6">
        {modoEditando.modoEditando == true ? (
          <>
            <br />
            <h2>Editar Tarea</h2>
            <br />

            {error ? (
              <div className="alert alert-danger">
                Todos los campos son obligatorios
              </div>
            ) : null}

            <form onSubmit={editarTareaForm} onReset={resetForm}>
              <div className="form-group">
                <label htmlFor="titulo">Favor ingrese un titulo</label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="Ingrese un titulo"
                  onChange={(e) => setTitulo(e.target.value)}
                  value={titulo}
                  disabled
                />
                <label htmlFor="descripcion">
                  Favor ingrese una descripcion
                </label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  id="descripcion"
                  onChange={(e) => setDescripcion(e.target.value)}
                  value={descripcion}
                  cols="30"
                  rows="10"
                ></textarea>
                <br />
                <button type="submit" className="btn btn-warning">
                  Editar Tarea{" "}
                </button>
                <span> </span>
                <button type="reset" className="btn btn-secondary">
                  Cancelar
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <br />
            <h2>Formulario</h2>
            <br />

            {error ? (
              <div className="alert alert-danger">
                Todos los campos son obligatorios
              </div>
            ) : null}

            <form onSubmit={enviarFormulario} onReset={resetForm}>
              <div className="form-group">
                <label htmlFor="titulo">Favor ingrese un titulo</label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="Ingrese un titulo"
                  onChange={(e) => setTitulo(e.target.value)}
                  value={titulo}
                />
                <label htmlFor="descripcion">
                  Favor ingrese una descripcion
                </label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  id="descripcion"
                  onChange={(e) => setDescripcion(e.target.value)}
                  value={descripcion}
                  cols="30"
                  rows="10"
                ></textarea>
                <br />
                <button type="submit" className="btn btn-primary">
                  Agregar Tarea
                </button>
                <span> </span>
                <button type="reset" className="btn btn-secondary">
                  Reinicar Formulario
                </button>
              </div>
            </form>
          </>
        )}

        <br />
        <hr />
        <h2>Frases de Gatos</h2>

        {errorGatos.vacio ? (
          <div className="alert alert-danger">Campo vacio</div>
        ) : null}

        {errorGatos.numero ? (
          <div className="alert alert-danger">Solo se aceptan numeros</div>
        ) : null}

        <form onSubmit={traerGatos}>
          <div className="form-group">
            <label htmlFor="frase">
              Favor ingrese cuantas frases va a Traer
            </label>
            <input
              type="text"
              className="form-control"
              id="frase"
              placeholder="Ingrese cuantas frases va a Traer"
              onChange={(e) => setNumero(e.target.value)}
              value={numero}
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Traer Frases
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
