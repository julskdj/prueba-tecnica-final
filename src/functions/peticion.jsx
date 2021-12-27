import shortid from "shortid";

const peticion = (numero) => {
  fetch(`https://catfact.ninja/facts?limit=${numero}`)
    .then((response) => response.json())
    .then((data) => {
        let arreglo = [];

        data.data.forEach((element) => {
          const gato = {
            id: shortid.generate(),
            descripcion: element.fact,
            completado: false,
            titulo: "",
          };
          arreglo.push(gato);
        });

        localStorage.setItem("tareas", JSON.stringify(arreglo));
    })
    .catch((error) => console.log(error));

};

export default peticion;
