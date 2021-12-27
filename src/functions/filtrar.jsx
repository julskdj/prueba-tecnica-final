const filtrar = (termino, setTareas, tareasBusqueda) => {
    var resultado = tareasBusqueda.filter((elemento) => {
      if (
        /*elemento.titulo
          .toString()
          .toLowerCase()
          .includes(termino.toLowerCase()) || */ //Tambien se puede filtrar por titulo, solo se debe quitar el comentario
        elemento.descripcion
          .toString()
          .toLowerCase()
          .includes(termino.toLowerCase())
      ) {
        return elemento;
      }
    });
    setTareas(resultado);
  };

export default filtrar
