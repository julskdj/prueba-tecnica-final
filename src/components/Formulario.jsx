import React, {useState} from 'react'
import shortid from 'shortid';

const Formulario = ({EstablecerTarea}) => {

    const [titulo , setTitulo] = useState("");
    const [descripcion , setDescripcion] = useState("");
    const [error, setError] = useState(false);

    const enviarFormulario = (e) => {
        e.preventDefault();
        if(titulo.trim() === "" || descripcion.trim() === ""){
            setError(true);
            return;
        }

        setError(false);
        EstablecerTarea({
            titulo,
            descripcion,
            id: shortid.generate()
        });

        e.target.reset();
        setTitulo("");
        setDescripcion("");
    }

    return (
        <>
            <div className="col-md-6">
                <br /><br />
                <h2>Formulario</h2>
                <br />

                {error ? <div className="alert alert-danger">Todos los campos son obligatorios</div> : null}

                <form onSubmit={enviarFormulario}>
                    <div className="form-group">
                        <label htmlFor="titulo">Favor ingrese un titulo</label>
                        <input type="text" 
                        className="form-control" 
                        id="titulo" 
                        placeholder="Ingrese un titulo" 
                        onChange={(e) => setTitulo(e.target.value)}
                        value={titulo}
                        />
                        <label htmlFor="descripcion">Favor ingrese una descripcion</label>
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
                        <button type="submit" className="btn btn-primary">Agregar Tarea </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario
