const numeros = [1, 2, 3, 4, 5, 6]; // Array de ejemplo
let sumaPares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) { // Verificar si el número es par
    sumaPares += numeros[i]; // Sumar solo los números pares
  }
}

console.log("La suma de los elementos pares del array es: " + sumaPares);
