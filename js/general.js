//ASIGNACION DEL ARCHIVO JSON A UNA VARIABLE GUARDADA EN UNA LOCALSTORAGE Y RECUPERADA PARA LA FUNCION GETSERVICIOLS()//

fetch("./servicios.json")
  .then(rta => rta.json())
  .then(info => {
    const informacionDelJson = JSON.stringify(info);

    localStorage.setItem('arrayServicios', informacionDelJson);

    console.log('JSON almacenado en localStorage.');
  });

const recuperarArray = localStorage.getItem('arrayServicios')

const arrayServicios = JSON.parse(recuperarArray)
console.log(arrayServicios)

const setIdServicio = (id) => {
    localStorage.setItem("servicio", JSON.stringify(id))
}
  
const getIdServicioLS = () => {
    return JSON.parse(localStorage.getItem("servicio"))
}
 
const getServicioLS = () => {
    const servicios = arrayServicios
    const id = getIdServicioLS()
    const servicio = servicios.find(elemento => elemento.id === id)
  
    return servicio
}
