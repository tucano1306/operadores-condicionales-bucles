// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuánto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.

// tu código aquí
Solution:

let tamaño = prompt("Ingrese el tamaño de la pizza que desea (pequeña, mediana, grande, familiar):").toLowerCase();


if (tamaño === "pequeña") {
    console.log("El precio de la pizza pequeña es $10.");
} else if (tamaño === "mediana") {
    console.log("El precio de la pizza mediana es $15.");
} else if (tamaño === "grande") {
    console.log("El precio de la pizza grande es $20.");
} else if (tamaño === "familiar") {
    console.log("El precio de la pizza familiar es $25.");
} else {
    console.log("Lo sentimos, no tenemos disponible ese tamaño de pizza.");
}



// 2. Pasa la siguiente condición a una sentencia switch
// Convertimos la condición anterior a una sentencia switch

const diaDeLaSemana = 'martes';

switch (diaDeLaSemana) {
  case 'lunes':
    console.log('Es lunes');
    break;
  case 'martes':
    console.log('Es martes');
    break;
  case 'miercoles':
    console.log('Es miercoles');
    break;
  case 'jueves':
    console.log('Es jueves');
    break;
  case 'viernes':
    console.log('Es viernes');
    break;
  case 'sabado':
    console.log('Es sabado');
    break;
  case 'domingo':
    console.log('Es domingo');
    break;
  default:
    console.log('No es un día de la semana');
}


// 3. La siguiente función debe recibir como parámetro un string con un nombre del mes y debe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido". Use la sentencia switch.
function estacion(mes) {
  // tu código aquí
}
function estacion(mes) {
  
  switch (mes.toLowerCase()) {
    case 'diciembre':
    case 'enero':
    case 'febrero':
      return 'Invierno';
    case 'marzo':
    case 'abril':
    case 'mayo':
      return 'Primavera';
    case 'junio':
    case 'julio':
    case 'agosto':
      return 'Verano';
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
      return 'Otoño';
    default:
      return 'Mes no válido';
  }
}


console.log(estacion('Marzo'));      // Output: Primavera
console.log(estacion('agosto'));     // Output: Verano
console.log(estacion('Noviembre'));  // Output: Otoño
console.log(estacion('Abril'));      // Output: Primavera
console.log(estacion('abc'));        // Output: Mes no válido


// 4. Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.
Solution:

function procesarNumero(numero) {
  if (numero > 10) {
    return numero;
  } else {
    return numero * 2;
  }
}

// Ejemplos de uso:
console.log(procesarNumero(5));    // Output: 10
console.log(procesarNumero(12));   // Output: 12
console.log(procesarNumero(10));   // Output: 20

// 5. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function halfArray(params) {
  // tu código aquí
}
Solution:

function halfArray(array) {
  const length = array.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    
    return [array[mid - 1], array[mid]];
  } else {
    
    return array[mid];
  }
}

// Ejemplos de uso:
console.log(halfArray([1, 3, 4]));               // Output: 3
console.log(halfArray([1, 3, 4, 5, 5, 3]));      // Output: [4, 5]
console.log(halfArray([10, 20, 30, 40, 50]));    // Output: 30
console.log(halfArray([2, 4, 6, 8]));            // Output: [4, 6]


console.log(halfArray([1, 3, 4]))
console.log(halfArray([1, 3, 4, 5, 6, 7]))

// 6. Tenemos un array con varios colores repetidos, pero quisieramos saber cuantos colores diferentes hay en el array y que cantidad de cada color hay. Tu trabajo es crear una función que reciba un array de colores y retorne un objeto con la cantidad de cada color.
const colores = [
  "rojo",
  "verde",
  "verde",
  "azul",
  "amarillo",
  "naranja",
  "rojo",
  "amarillo",
  "rojo",
  "verde",
  "azul",
  "rojo",
]
Solution:

function contarColores(coloresArray) {
  const conteoColores = {};
  
  for (let color of coloresArray) {
    if (conteoColores[color]) {
      conteoColores[color]++;
    } else {
      conteoColores[color] = 1;
    }
  }
  
  return conteoColores;
}

// Ejemplo de uso:
const colores = [
  "rojo",
  "verde",
  "verde",
  "azul",
  "amarillo",
  "naranja",
  "rojo",
  "amarillo",
  "rojo",
  "verde",
  "azul",
  "rojo",
];

console.log(contarColores(colores));
// Salida:
// {
//   rojo: 4,
//   verde: 3,
//   azul: 2,
//   amarillo: 2,
//   naranja: 1
// }


// El siguiente arreglo de usuario será el que pasarás por argumento a tus funciones de los problemas 7 y 8.
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    genero: "Mujer",
  },
];


// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.
Solution:

function obtenerNombresMujeres(usuarios) {
  
  const mujeres = usuarios.filter(usuario => usuario.genero === "Mujer");
  
  
  const nombresMujeres = mujeres.map(usuario => usuario.nombre);
  
  return nombresMujeres;
}

// Ejemplo de uso:
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    genero: "Mujer",
  },
];

const nombresDeMujeres = obtenerNombresMujeres(usuarios);
console.log(nombresDeMujeres); // Output: ["Andrea", "Daniela"]

// 8. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.
Solution:
// Función que recibe un arreglo de usuarios y retorna un arreglo con los usuarios entre 20 y 30 años de edad
function obtenerUsuariosEnRango(usuarios) {
  // Filtramos los usuarios cuya edad está entre 20 y 30 años, inclusive
  const usuariosEnRango = usuarios.filter(usuario => usuario.edad >= 20 && usuario.edad <= 30);
  
  return usuariosEnRango;
}

// Ejemplo de uso:
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    genero: "Mujer",
  },
];

const usuariosEnRango = obtenerUsuariosEnRango(usuarios);
console.log(usuariosEnRango);
// Salida:
// [
//   { nombre: "Erik", edad: 29, genero: "Hombre" },
//   { nombre: "Daniela", edad: 22, genero: "Mujer" }
// ]


// 9. El reto Fizz Buzz: Tenemos un array de números del 1-100, todos los que son múltiplos de 3 deben devolver Fizz, todos los que son múltiplos de 5 deben devolver Buzz y los que son múltiplos de ambos, es decir, 3 y 5, deben devolver Fizz Buzz.
Solution:
// Reto Fizz Buzz: Para los números del 1 al 100, reemplazamos los múltiplos de 3 por "Fizz", los múltiplos de 5 por "Buzz" y los múltiplos de ambos (3 y 5) por "Fizz Buzz".

function fizzBuzz() {
  const resultado = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      resultado.push('Fizz Buzz');
    } else if (i % 3 === 0) {
      resultado.push('Fizz');
    } else if (i % 5 === 0) {
      resultado.push('Buzz');
    } else {
      resultado.push(i);
    }
  }

  return resultado;
}

// Ejemplo de uso:
console.log(fizzBuzz());

