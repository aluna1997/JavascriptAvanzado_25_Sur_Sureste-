//PARA ESTA SESIÓN VAMOS A CONSUMIR LA POKEAPI
//url de la pokeapi: https://pokeapi.co/
//endpoint para las pateciones: https://pokeapi.co/api/v2/pokemon

// CREAMOS UN ENDPOINT Y GUARDAMOS LA RUTA 
const URI = 'https://pokeapi.co/api/v2/pokemon/'

// INVOCAR O TRAER A REQUEST
const request = require ('request')

//VAMOS A CREAR UNA FUNCIÓN PARA TRAER A LOS POKEMONS POR SU NOMBRE Y MOSTRAR EL TIPO DE POKEMON

function getPokemon(name){
    request(URI + name , function (error, response, body) {
        // validar si la data existe o no existe
        //LA DATA EXISTE
        if(response.statusCode === 200){
            const dataEnFormtaoJson = JSON.parse(body) // EL OBJETO EN FORMATO JSON, DEBO CONVERTILOR A UN OBJETO DE JAVASCRIPT 
                  // MOSTRAR EL TIPO DE POKEMON
                  const typePokemon = dataEnFormtaoJson.types.map((objeto)=>objeto.type.name) 
                  console.log(`EL TIPO DE POKEMON DE ${name} es ${typePokemon}`)
        }else{
            console.log(`OCURRIO UN ERROR: ${response.statusCode} ${response.statusMessage}`)
                                          //      404                   NOT FOUND 
        }
      });
    }
getPokemon('pikachu')
getPokemon('charmander')
getPokemon('bulbasaur')
getPokemon('charizar')