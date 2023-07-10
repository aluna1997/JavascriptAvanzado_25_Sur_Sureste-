const miPromesa = new Promise((resolve, reject) => {
    // Simulación de una operación asíncrona
    setTimeout(() => {
      const exito = true; // Indicador de éxito o error
      if (exito) {
        resolve('La operación se completó exitosamente.');
      } else {
        reject('La operación falló.');
      }
    }, 2000);
});
  
miPromesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});


const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
      // Simulación de una operación asíncrona
      setTimeout(() => {
        const datos = 'Estos son los datos.';
        resolve(datos);
      }, 2000);
    });
  };
  
const procesarDatos = (datos) => {
    return new Promise((resolve, reject) => {
        // Simulación de una operación asíncrona
        setTimeout(() => {
            const resultado = datos.toUpperCase();
            resolve(resultado);
        }, 2000);
    });
};
  
obtenerDatos()
    .then((datos) => {
        console.log('Datos obtenidos:', datos);
        return procesarDatos(datos);
    })
    .then((resultado) => {
        console.log('Resultado procesado:', resultado);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
  

