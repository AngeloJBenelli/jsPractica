const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerDivisoresEnRango(minimo, maximo, divisor) {
  const divisores = [];

  for (let i = minimo; i <= maximo; i++) {
    if (i % divisor === 0) {
      divisores.push(i);
    }
  }

  return divisores;
}

rl.question("Ingresa el valor mínimo: ", (inputMinimo) => {
  const minimo = parseInt(inputMinimo);

  rl.question("Ingresa el valor máximo: ", (inputMaximo) => {
    const maximo = parseInt(inputMaximo);

    rl.question("Ingresa el divisor: ", (inputDivisor) => {
      const divisor = parseInt(inputDivisor);

      if (isNaN(minimo) || isNaN(maximo) || isNaN(divisor) || divisor === 0) {
        console.log("Por favor, ingresa valores válidos y asegúrate de que el divisor no sea 0.");
      } else {
        const resultado = obtenerDivisoresEnRango(minimo, maximo, divisor);
        console.log(`Los números divisibles por ${divisor} entre ${minimo} y ${maximo} son:`, resultado);
      }

      rl.close();
    });
  });
});
