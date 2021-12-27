import shortid from "shortid";

const peticion = async (numero) => {
  const res = await fetch(`https://catfact.ninja/facts?limit=${numero}`);
  const data = await res.json();

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

  return arreglo;
};

export default peticion;
