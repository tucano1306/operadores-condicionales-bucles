// 1. Crea una función que cree un arreglo con los números del 1 al 400

Solution:
function createArray1to400() {
  const arr = [];
  for (let i = 1; i <= 400; i++) {
    arr.push(i);
  }
  return arr;
}

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
solution:
function rangeArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Solution:
function sumArray(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
const numeros = [1,2,3,4,5,6,7,8,9,10];

const suma = sumArray(numeros);
console.log(`La suma es: ${suma}`);

// El siguiente objeto se utilizará como argumento para resolver los ejercicios 4, 5, 6 y 7:
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    correo: "erik@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/erik" },
      { nombre: "twitter", url: "twitter/erik" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: "georg@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/georg" },
      { nombre: "twitter", url: "twitter/georg" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: "andrea@hotmail.com",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: "oscar@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/oscar" },
      { nombre: "twitter", url: "twiter/oscar" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: "andrea@uaq.mx",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
];

// 4. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con los correos de los usuarios.

Solution:
function getUserEmails(users) {
  return users.map(user => user.correo);
}


// 5. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todas las urls de las cuentas de facebook.

Solution:
function getFacebookUrls(users) {
  const urls = [];
  for (let user of users) {
    for (let socialAccount of user.social) {
      if (socialAccount.nombre === 'facebook') {
        urls.push(socialAccount.url);
      }
    }
  }
  return urls;
}
// 6. Crea una función que reciba como parámetros un arreglo de usuarios dos propiedades (nombre, genero), y retorne un arreglo con todos los géneros de los usuarios con su nombre, ejemplo: 'Erik: Hombre'.

Solution:
function getNamesAndGenders(users, propName1, propName2) {
  return users.map(user => `${user[propName1]}: ${user[propName2]}`);
}
// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne la suma de todas las edades de los usuarios.
Solution:
function sumUserAges(users) {
  return users.reduce((sum, user) => sum + user.edad, 0);
}

// 8. Crea una función que reciba un objeto como parámetro e itere con for..in sobre las propiedades y sume sus valores:
const obj = {
  a: 1,
  b: 2,
  c: 3
};

Solution:
function sumObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
const obj = { a: 1, b: 2, c: 3 };

// 9. Crea una función que recibs un objeto como parámetro e itere con for..in sobre las propiedades y las pinte guarde en un array, tanto nombre como población, por ejemplo: La población de Londres es de 8981 mil habitantes.
const poblacion = {
  Londres: 8981,
  París: 2141,
  Madrid: 3223,
  Berlín: 3769,
  Roma: 2871,
};

Solution:
function getPopulationStrings(populationObj) {
  const result = [];
  for (let city in populationObj) {
    result.push(`La población de ${city} es de ${populationObj[city]} mil habitantes.`);
  }
  return result;
}
const poblacion = {
  Londres: 8981,
  París: 2141,
  Madrid: 3223,
  Berlín: 3769,
  Roma: 2871,
};