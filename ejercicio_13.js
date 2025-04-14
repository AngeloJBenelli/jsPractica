const personas = [
    { nombre: "Ana", sexoBiologico: "F", edad: 25 },
    { nombre: "Juan", sexoBiologico: "M", edad: 30 },
    { nombre: "María", sexoBiologico: "F", edad: 40 },
    { nombre: "Pedro", sexoBiologico: "M", edad: 20 },
    { nombre: "Lucía", sexoBiologico: "F", edad: 35 }
  ];
  
  // Función para calcular el promedio de edad
  function calcularPromedioEdad(personas) {
    return personas.reduce((acum, persona) => acum + persona.edad, 0) / personas.length;
  }
  
  // Función para encontrar la mujer con mayor edad
  function obtenerMujerMayor(personas) {
    return personas
      .filter(persona => persona.sexoBiologico === "F")
      .reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), { edad: 0 });
  }
  
  // Función para encontrar el hombre con menor edad
  function obtenerHombreMenor(personas) {
    return personas
      .filter(persona => persona.sexoBiologico === "M")
      .reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), { edad: Infinity });
  }
  
  // Función para calcular el promedio de edad de las mujeres
  function calcularPromedioEdadMujeres(personas) {
    const mujeres = personas.filter(persona => persona.sexoBiologico === "F");
    return mujeres.reduce((acum, mujer) => acum + mujer.edad, 0) / mujeres.length;
  }
  
  // Llamadas a las funciones
  const promedioEdad = calcularPromedioEdad(personas);
  const mujerMayor = obtenerMujerMayor(personas);
  const hombreMenor = obtenerHombreMenor(personas);
  const promedioEdadMujeres = calcularPromedioEdadMujeres(personas);
  
  // Mostrar resultados
  console.log("Promedio de edad:", promedioEdad.toFixed(2));
  console.log("Mujer con mayor edad:", mujerMayor.nombre);
  console.log("Hombre con menor edad:", hombreMenor.nombre);
  console.log("Promedio de edad de las mujeres:", promedioEdadMujeres.toFixed(2));
