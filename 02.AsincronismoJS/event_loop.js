function sincrono(){
    console.log('1');
    console.log('2');
    console.log('3');
}

sincrono();

function asincrono(){
    console.log('1');
    console.log('2');
    setTimeout(function hola(){
        console.log('Set timeout termina.')
    },5000);
    console.log('3');
}

asincrono();