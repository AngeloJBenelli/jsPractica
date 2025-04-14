const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa una palabra: ", (palabra) => {
  const conteoLetras = {};

  // Convertir la palabra a mayúsculas para que no distinga entre mayúsculas y minúsculas
  const palabraNormalizada = palabra.toUpperCase();

  // Contar las repeticiones de cada letra
  for (let letra of palabraNormalizada) {
    if (conteoLetras[letra]) {
      conteoLetras[letra]++;
    } else {
      conteoLetras[letra] = 1;
    }
  }

  // Mostrar el resultado
  console.log("Repeticiones de letras:");
  for (let letra in conteoLetras) {
    console.log(`${letra} = ${conteoLetras[letra]}`);
  }

  rl.close();
});
