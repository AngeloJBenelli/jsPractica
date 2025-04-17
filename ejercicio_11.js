const palabra = "HACHA"; // Ingresa la palabra aquí
const conteoLetras = {};

// Contar las repeticiones de cada letra
for (let letra of palabra) {
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
