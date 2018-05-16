const {
    cocinarCarneLadoA,
    cocinarCarneLadoB,
    tostarPanA,
    tostarPanB,
    prepararBebida,
    freirPapas,
    empaquetarPapas,
    salarPapas,
} = require('./promesas');

/*
    Continuando con el ejemplo anterior, ahora se desea modelar el armado de un pedido completo,
    el cual esta compuesto por: bebida, papas y la hamburguesa.

    Los pasos para armar el pedido son:
        1. Preparar las papas fritas
        2. Preparar la bebida.
        3. Preparar la hamburguesa (ya lo tiene resuelto por el ejemplo provisto).
        4. Poner todo en la bandeja. (1, 2 y 3 deben estar terminados)

    Preparar las papas implica
      a. Freir las papas
      b. Empaquetarlas (depende de a)
      c. salarlas (depende de b)

    Preparar la bebida implica un solo paso, servir la bebida en el vaso.

    Además, se disponen de 3 empleados: uno que prepara las papas, otro que prepara la hambuerguesa y otro
    que prepara la bebida. Cada empleado trabaja de manera independiente.

    El pedido debera ser un objeto javascript de la forma:
        {
            papas: 'Papas fritas empaquetadas con sal',
            hamburguesa: ["pan A", "Carne cocida", "pan B"],
            bebida: 'Bebida',
        }

    Usted dispone de las siguientes funciones:
        prepararBebida retorna una promesa que se resolverá con el string "Bebida"
        freirPapas: retorna una promesa que se resolverá con el string "Papas fritas"
        empaquetarPapas: retorna una promesa que se resolverá con el string "empaquetadas"
        salarPapas: retorna una promesa que se resolverá con el string "con sal"
*/

class Empleado {

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

    prepararPapas() {
        return freirPapas().then((a) => empaquetarPapas().then((b) => salarPapas().then(
            (c) => {return a+b+c}
        )));
    }

    prepararBebida() {
        return prepararBebida();
    }
}

class Restaurante {
    constructor() {
        this.empleados = [new Empleado(), new Empleado(), new Empleado()]
    }

    armarPedido() {
        let papas = this.empleados[0].prepararPapas();
        let hamburguesa = this.empleados[1].prepararHamburguesa();
        let bebida = this.empleados[2].prepararBebida();

        return Promise.all([papas, hamburguesa, bebida]
            ).then((partes) => {
                return {
                    papas: partes[0],
                    hamburguesa: partes[1],
                    bebida: partes[2]
                };
            });     
    }
}


// Cliente del restaurante pidiendo la hamburguesa
const restaurante = new Restaurante();
restaurante.armarPedido()
.then((pedido) => {
    console.log(' ');
    console.log("Gracias! este es mi pedido: ", pedido);
});