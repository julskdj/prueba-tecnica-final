import React from 'react'

const cambiarEstado = (id, tareas, setTareas) => {
    
    setTareas(tareas.map(tarea => {
        if(tarea.id === id){
          tarea.completado = !tarea.completado;
        }
        return tarea;
      }))
}

export default cambiarEstado
