const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa el primer número: ", (input1) => {
  const numero1 = parseFloat(input1);

  rl.question("Ingresa el segundo número: ", (input2) => {
    const numero2 = parseFloat(input2);
    const resultado = numero1 + numero2;

    console.log("La suma de " + numero1 + " y " + numero2 + " es: " + resultado);
    rl.close();
  });
});
