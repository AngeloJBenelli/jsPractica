const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa una palabra: ", (palabra) => {
  rl.question("Ingresa un número: ", (inputNumero) => {
    const numero = parseInt(inputNumero);

    if (isNaN(numero) || numero <= 0) {
      console.log("Por favor, ingresa un número válido mayor a 0.");
    } else {
      const resultado = palabra.repeat(numero);
      console.log("Resultado: " + resultado);
    }

    rl.close();
  });
});
