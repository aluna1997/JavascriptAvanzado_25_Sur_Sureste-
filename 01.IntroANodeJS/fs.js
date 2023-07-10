// Importar el módulo de FileSystem.
const fs = require('fs');

// Función que lee un archivo del File System.
function leerArchivo(ruta_archivo){
    fs.readFile(ruta_archivo,'utf-8', (err,contenido) => {
        if (err){
            throw err;
        } else {
          console.log(contenido);
        }
    });
}

// Función que escribe un archivo en File System.
function escribirArchivo(ruta_archivo,contenido){
    fs.writeFile(ruta_archivo,contenido, (err) => {
        if(err){
          throw err;
        } else {
          console.log('El archivo se escribio correctamente.')
        }
    });
}


// Función que renombra un archivo.
function renombrarArchivo(ruta_archivo,nuevo_nombre){
  fs.rename(ruta_archivo,nuevo_nombre, (err) =>{
      if (err){
        throw err;
      } else {
        console.log('El archivo se renombro correctamente.');
      }
  });
}

// Función que agrega contenido al final de un archivo.
function agregaArchivo(ruta_archivo,agregado){
  fs.appendFile(ruta_archivo,agregado, (err) => {
    if (err){
      throw err;
    } else {
      console.log('Archivo actualizado');
    }
  });
}


let ruta_archivo = './files/daft_punk_2.txt'

//leerArchivo(ruta_archivo);
//escribirArchivo('./files/hola.txt','Hola');
//renombrarArchivo(ruta_archivo,'./files/daft_punk.txt');
//agregaArchivo(ruta_archivo,'Hola');


