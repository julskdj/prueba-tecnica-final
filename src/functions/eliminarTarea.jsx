
const eliminarTarea = (
  id,
  setTareas,
  tareas,
  tareasBusqueda,
  settareasBusqueda,
  setModoEditando
) => {
  setTareas(tareas.filter((tarea) => tarea.id !== id));
  settareasBusqueda(tareasBusqueda.filter((tarea) => tarea.id !== id));
  setModoEditando(false);
};

export default eliminarTarea;
