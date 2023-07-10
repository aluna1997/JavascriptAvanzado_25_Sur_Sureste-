console.log("-- El 2 y 3 van en la cola de ejecución --");
console.log('1');

setTimeout(() => {
    // Cosulta a BD.
    return console.log(2);
}, 3000);

setTimeout(() => {
    // Cosulta a BD.
    return console.log(3);
}, 3000);

console.log('4');