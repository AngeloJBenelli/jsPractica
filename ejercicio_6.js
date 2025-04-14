const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa el primer número: ", (input1) => {
  const numero1 = parseInt(input1);

  rl.question("Ingresa el segundo número: ", (input2) => {
    const numero2 = parseInt(input2);

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log("Por favor, ingresa números válidos.");
    } else if (numero1 === numero2 || Math.abs(numero1 - numero2) === 1) {
      console.log("No hay números que los separen.");
    } else {
      const inicio = Math.min(numero1, numero2) + 1;
      const fin = Math.max(numero1, numero2);
      const numerosSeparados = [];

      for (let i = inicio; i < fin; i++) {
        numerosSeparados.push(i);
      }

      console.log("Los números que los separan son: " + numerosSeparados.join(", "));
    }

    rl.close();
  });
});
