const numero1 = 1;
const numero2 = 10;

const inicio = Math.min(numero1, numero2) + 1;// Se suma 1 para no incluir los números extremos
const fin = Math.max(numero1, numero2);// Se toma el máximo para no incluir los números extremos
const numerosSeparados = [];

for (let i = inicio; i < fin; i++) {
 numerosSeparados.push(i);
}

console.log("Los números que los separan son: " + numerosSeparados + ".");
