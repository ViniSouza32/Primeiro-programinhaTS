import * as promptSync from 'prompt-sync';
const prompt = promptSync();



console.log('Hello World');

let nome: string = 'Viní';

let num1: number = 5;
let num2: number = 1.2;
let num3: number = -1;

console.log(num1, num2, num3);

let tof: boolean = false;
let tof2: boolean = true;

console.log(tof, tof2);

nome = prompt('Qual seu nome?');

if (nome == 'Vini') {
  console.log('Hello ' + nome + '!');
} else {
  console.log('Hello ' + nome + '!');
}

let idade: number;

do {
  idade = Number (prompt('Quantos anos você tem?'));
} while (isNaN(idade));

if (idade >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}