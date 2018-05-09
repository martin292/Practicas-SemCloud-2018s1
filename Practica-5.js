"use strict"

//1



//2
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let clients = [];

function close(){
    if(clients.length === 0){
        console.log('------------------ CERRADO --------------------');
    }
}

function processInput(input){
    let c = clients.find(c => c.name === input);
    if(c !== undefined){
        c.endWaiting();
        clients = clients.filter(client => client !== c);
        close();
    }
}

class Client {
    constructor(name){
        this.name = name;
        this.interval = null;
    }

    wait(seconds){
        this.interval = setInterval(this.waiting.bind(this), seconds * 1000);
    }

    waiting(){
        console.log(this.name + ': Esta esperando');
    }

    endWaiting(){
        clearInterval(this.interval);
        console.log(this.name + ': Termino de esperar');
    }
}

let a = new Client('AAA');
let b = new Client('BBB');
let c = new Client('CCC');
let d = new Client('DDD');

clients.push(a);
clients.push(b);
clients.push(c);
clients.push(d);

a.wait(1);
b.wait(1);
c.wait(1);
d.wait(1);

rl.on('line', processInput);

