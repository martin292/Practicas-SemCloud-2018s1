const {
    cocinarCarneLadoA,
    cocinarCarneLadoB,
    tostarPanA,
    tostarPanB
} = require('./promesas');

/*
    Se desea modelar el proceso de preparación de una hamburguesa en una casa de comidas rápidas.

    Los pasos para preparar la hamburguesa son:
        a. Tostar el pan de arriba.
        b. Tostar el pan de Abajo.
        c. Cocinar la carne de un lado.
        d. Cocinar la carne del otro lado. (Depende de c)
        e. Armar la hamburguesa. (Depende de a, b y d)

    Además, se disponen de 4 maquinas (una para cada acción nombrada arriba) que trabajan de manera
    independiente.

    Estas maquinas se pueden accionar utilizando las funciones:
        cocinarCarneLadoA,
        cocinarCarneLadoB,
        tostarPanA,
        tostarPanB

    Cada una de ellas retornará una promesa, que cuando se resolverá con el recurso mandado a hacer.
    Cada recurso es un string:
        cocinarCarneLadoA resolverá al string "carne semicocida"
        cocinarCarneLadoB resolverá al string "carne cocida"
        tostarPanA resolverá al string "Pan A"
        tostarPanB resolverá al string "Pan B"

    La hamburguesa final armada deberá representarse como un array de la forma:
       ["pan A", "carne cocida", "pan B"]
*/


class Restaurante {

    prepararHamburguesa() {
        let promesaDeCarneCocida = cocinarCarneLadoA().then(
            () => cocinarCarneLadoB()
        );

        return Promise.all([tostarPanA(), promesaDeCarneCocida, tostarPanB()]
            ).then((partes) => {
                let panA = partes[0];
                let carneCocida = partes[1];
                let panB = partes[2];
                return [panA, carneCocida, panB];
            });
    }
}


// Cliente del restaurante pidiendo la hamburguesa
const restaurante = new Restaurante();
restaurante.prepararHamburguesa()
.then((hamburguesa) => {
    console.log("Gracias! esta es mi hamburguesa: ", hamburguesa);
});