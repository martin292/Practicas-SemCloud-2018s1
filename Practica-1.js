"use strict"

//1 
//console.log('Hello World!');

//2
function helloWorld(msg){
  console.log('Hello World!');
}

//3 
function echo(msg){
  console.log(msg);
}

//4 
function esPar(n){
  return n%2 === 0;
}

//5 
function retornarElMasGrande(n1, n2, n3){
  var num;
  if(n1 > n2 && n1 > n3){
    num = n1;
  }
  else if(n2 > n1 && n2 > n3){
    num = n2;
  }
  else{
    num = n3;
  }
  return num;
}

//6 
function retornarElMasChico(n1, n2, n3){
  var num;
  if(n1 < n2 && n1 < n3){
    num = n1;
  }
  else if(n2 < n1 && n2 < n3){
    num = n2;
  }
  else{
    num = n3;
  }
  return num;
}

//7
function esUnNumero(str){
  return !isNaN(parseInt(str, 10)) || !isNaN(parseFloat(str, 10));
}

//8 
function parsearHexa(str){
  return parseInt(str, 16);
}

//9
function esMultiplo(unNumero, multiploDe){
  return multiploDe%unNumero === 0;
}

//-----------------------------------

/*
2)

if (5 == "5") console.log("son iguales"); 
else console.log("son distintos");

retorna "son iguales" 
(El operador == convierte el 5 en string para poder comparar)

---------------------------------

if (5 === "5") console.log("son iguales"); 
else console.log("son distintos");

retorna "son distintos" 
(El operador === compara sin cambiar los tipos)

---------------------------------

let myArray  = [1,2,3]; 
let myArray2 = [1,2,3];

if (myArray === myArray2) console.log("Los arrays son iguales");
else console.log("los arrays son distintos");

retorna "los arrays son distintos"

---------------------------------

3)

= ---> Asigna un valor a una variable.

== --> Operador de igualdad; convierte los operandos si no tienen los mismos tipos y despues compara.

=== -> Operador de identidad; retorna true si los operandos son estrictamente iguales (sin conversion de tipos)

---------------------------------

4)

var x;
console.log(x);

---------------------------------

5)
6)
7)

6 + "2" retorna '62' (+ concatena strings)

"6" * "2" retorna 12 (* convierte los strings en numeros y los multiplica)

if (0) console.log("0 es true"); else "0 es false";
retorna "0 es false" (cualquier otro numero true)

if ("") console.log("\"\" es true"); else "\"\" es false";
retorna '"" es false' (el string vacio es falso)

if (null) console.log("null es true"); else "null es false";
retorna 'null es false' ()

if ([]) console.log("[] es true"); else "[] es false";
retorna [] es true ()

if (undefined) console.log("undefined es true"); else "undefinedes false";
retorna undefinedes false ()

let e = 1; if (e) console.log("e es true"); else console.log("es false");
retorna e es true ()

*/

//-----------------------------------

//3

//1
function area(a, b, c){
  var s = (a+b+c)/2;
  return (Math.sqrt(s*(s-a)*(s-b)*(s-c)));
}

//2 
function fibonacci(n){
    var ret;
    switch (n){
        case 1: ret = 0; break;
        case 2: ret = 1; break;
        case 3: ret = 1; break;
        default: ret = fibonacci(n-1) + fibonacci(n-2); break;
    }
    return ret;
}

//5
function construirEsMultiploDe3(){
    return function(n){
        return esMultiplo(3, n);
    }
}

//6
function construirEsMultiploDe(multiplo){
    return function(n){
        return esMultiplo(multiplo, n);
    }
}

//-----------------------------------------

//4

//1
function print1(anArray){
  anArray.forEach(x => console.log(x));
}

function print2(anArray){
  for (var i in anArray) { console.log(anArray[i]) }
}

//2
function average(array){
  let average = 0;
  array.forEach(n => average = average + n)
  return average/array.length;
}

//3
function max(array){
  return array.reduce((ac, c) => Math.max(ac, c));
}

//4
function pares(array){
  return array.filter(n => n%2 == 0);
}

//5
function removerDuplicados(array){}

//6

//7
function isVowel(char){
  switch (char){

    case 'a': return true; break;
    case 'e': return true; break;
    case 'i': return true; break;
    case 'o': return true; break;
    case 'u': return true; break;

    case 'A': return true; break;
    case 'E': return true; break;
    case 'I': return true; break;
    case 'O': return true; break;
    case 'U': return true; break;

    default: return false; break;
  }
}

//8
function countVowels(str){
  let vowels = 0;
  for(let i=0; i<str.length; i++){
    if(isVowel(str.charAt(i))) vowels++
  }
  return vowels;
}

//9
function words(str){
  return str.split(' ');
}

//10
function capitalize(str){
  let char = str.charAt().toUpperCase();
  let ret = '';
  return ret.concat(char, str.substr(1));
}

//11
function capitalizeAllWords(str){
  return str.split('_').map(w => capitalize(w)).join('');
}

//----------------------------------------

//5 Ejercicios combinados

//1
function area(tipo, parametros){
  switch(tipo){
    case 'cuadrado': return areaCuadrado(parametros); break;
    case 'triangulo': return areaTriangulo(parametros); break;
    case 'circulo': return areaCirculo(parametros); break;
  }
}

function areaCuadrado(parametros){
  return parametros[0] * parametros[0];
}

function areaCirculo(parametros){
  return Math.PI * (parametros[0]*parametros[0]);
}

function areaTriangulo(parametros){
  return null; //
}

//2
function generarArray(n){
  let notas = [];
  for(let i=0; i<n; i++){
    notas[i] = Math.floor(Math.random()*11);
  }
  return notas;
}

function profeBuenaOnda(notas){
  return notas.map(n => sumarAMalosYRegulares(n));
}

function sumarAMalosYRegulares(n){
  return (n>=0 && n<=5) ? n+1 : n;
}


//3





