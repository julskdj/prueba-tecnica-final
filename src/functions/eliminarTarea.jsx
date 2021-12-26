
const eliminarTarea = (
  id,
  setTareas,
  tareas,
  tareasBusqueda,
  settareasBusqueda
) => {
  setTareas(tareas.filter((tarea) => tarea.id !== id));
  settareasBusqueda(tareasBusqueda.filter((tarea) => tarea.id !== id));
};

export default eliminarTarea;
