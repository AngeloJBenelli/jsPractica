const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa el primer número: ", (input1) => {
  const numero1 = parseFloat(input1);

  rl.question("Ingresa el segundo número: ", (input2) => {
    const numero2 = parseFloat(input2);

    rl.question("Ingresa el tercer número: ", (input3) => {
      const numero3 = parseFloat(input3);

      // Determinar el mayor y el menor
      const mayor = Math.max(numero1, numero2, numero3);
      const menor = Math.min(numero1, numero2, numero3);

      console.log("El número mayor es: " + mayor);
      console.log("El número menor es: " + menor);

      rl.close();
    });
  });
});
