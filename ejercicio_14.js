function obtenerDivisoresEnRango(minimo, maximo, divisor) {
  const divisores = [];

  for (let i = minimo; i <= maximo; i++) {
    if (i % divisor === 0) {
      divisores.push(i);
    }
  }

  return divisores;
}

const minimo = 10; // Ingresa el valor mínimo aquí
const maximo = 50; // Ingresa el valor máximo aquí
const divisor = 5; // Ingresa el divisor aquí

if (divisor === 0) {
  console.log("El divisor no puede ser 0.");
} else {
  const resultado = obtenerDivisoresEnRango(minimo, maximo, divisor);
  console.log(" Los números divisibles por " + divisor + " entre " + minimo + " y " + maximo + " son: " + resultado + ".");
  // Se muestra la lista de números divisibles por el divisor
}
