function saludar(nombre, callback) {
    console.log('¡Hola, ' + nombre + '!');
    callback();
}
  
function despedir() {
    console.log('¡Hasta luego!');
}
  
saludar('Juan', despedir);


const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero);
});


const numeros_2 = [1, 2, 3, 4, 5];

const duplicados = numeros_2.map(function(numero) {
    return numero * 2;
});

console.log(duplicados); // [2, 4, 6, 8, 10]


  
