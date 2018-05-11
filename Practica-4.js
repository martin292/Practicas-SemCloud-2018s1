"use strict"

//Manejo de exepciones

//1

class Persona {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log('walking like a boss');
    }
}

//let pepe = new Persona('Pepe');
//pepe.walk();

/*
pepe.talk();

TypeError: pepe.talk is not a function
*/
/*
try{
    pepe.talk();
}catch(e){
    console.log('El objeto no entiende el mensage.');
}
*/

//2

function dividirPor(numerador, denominador){
    try{
        if(denominador === 0){
            throw new ZeroDivideException(numerador);
        }
        return numerador/denominador;
    }finally{
        console.log('Numerador: ' + numerador);
        console.log('Denominador: ' + denominador);
    }
}

function ZeroDivideException(msg){
    this.name = "Division por zero";
    this.message = msg;
}
//ZeroDivideException.prototype = new Error();
//ZeroDivideException.prototype.constructor = ZeroDivideException;

//console.log('');
//console.log('Resultado: ' + dividirPor(15, 0));


//JSON

//1

let pepe = '{"firstName":"Pepe","lastName":"Argento","age":45}';

let objPepe = JSON.parse(pepe);
objPepe.age = 50;

let jsonPepe = JSON.stringify(objPepe);

//2
/*
let datos = '[1,2,3,4]';
console.log(typeof(datos));
string

let datos2 = [1,2,3];
console.log(typeof(datos2));
object

let datos3 = JSON.parse(datos);
console.log(typeof(datos3));
object

let datos4 = JSON.stringify(datos2);
console.log(typeof(datos4));
string
*/

//3

let user1 = { name: 'user1', friends:[ ] };
let user2 = { name: 'user2', friends:[user1] };
user1.friends.push(user2);

//JSON.stringify(user1); TypeError: Converting circular structure to JSON

function generateJSON(data){
    //TODO
}
