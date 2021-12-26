const editarTarea = (id, setModoEditando, descripcion) => {
    console.log(id)
    setModoEditando(
        {
            id,
            modoEditando: true,
        }
    );
}

export default editarTarea
