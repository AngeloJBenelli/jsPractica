const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa una palabra: ", (input) => {
  if (input.trim().length > 0) {
    console.log("Tiene letras");
  } else {
    console.log("No ingresaste ninguna palabra");
  }
  rl.close();
});
