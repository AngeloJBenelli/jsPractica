const numero1 = 1; // Ingresa el primer número aquí
const numero2 = 10; // Ingresa el segundo número aquí

const inicio = Math.min(numero1, numero2) + 1;
const fin = Math.max(numero1, numero2);
const multiplosDeTres = [];

for (let i = inicio; i < fin; i++) {
  if (i % 3 === 0) {
    multiplosDeTres.push(i);
  }
}

if (multiplosDeTres.length > 0) {
  console.log(" Los múltiplos de 3 comprendidos entre " + numero1 + " y " + numero2 + " son: " + multiplosDeTres + "."); // Se muestra la lista de múltiplos de 3
} else {
  console.log(" No hay múltiplos de 3 comprendidos entre " + numero1 + " y " + numero2 + "."); // Se indica que no hay múltiplos de 3
}
