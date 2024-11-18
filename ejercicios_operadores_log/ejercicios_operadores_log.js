// 1. ¿Cuál es el resultado de la siguiente expresión?
console.log(null || 2 || undefined) //= // Output: 2
console.log(1 || 2 || 3) //=// Output: 1
console.log(1 && null && 2) //= // Output: null
console.log(1 && 2) //=  // Output: 2
console.log(null || 2 && 3 || 4) //=// Output: 3

const count = 0

console.log(null || count || 35) //= // Output: 35
console.log(null && count && 35) //=// Output: null
console.log(null ?? count ?? 35) //=  // Output: 0

// 2. Usando los operadores lógicos, escriba una expresión que devuelva true si el usuario está autenticado y si tiene acceso a la página
Solution:
function tieneAcceso(usuario) {
    return usuario.authenticated && usuario.access;
  }
  
const user = { authenticated: true, access: true }
const user2 = { authenticated: true, access: false }
const user3 = { authenticated: false, access: true }
const use4 = { authenticated: false, access: false }

console.log(user.authenticated && user.access) // Output: true
console.log(user2.authenticated && user2.access) //Output: false
console.log(user3.authenticated && user3.access) //Output: false
console.log(use4.authenticated && use4.access) //Output: false

console.log(user.authenticated || user.access) // Output: true
console.log(user2.authenticated || user2.access) //Output: true
console.log(user3.authenticated || user3.access) // Output: true
console.log(use4.authenticated || use4.access) // Output: false

// 3. Resuelva el siguiente problema: Tenemos un arreglo de frutas, y queremos todas las frutas que empiecen con la letra "P" y que aparte sean de la tienda "La frutera".
const fruits = [{ nombre: 'Uva', tienda: 'El mercado' }, { nombre: 'Pera', tienda: 'La frutera' }, { nombre: 'Manzana', tienda: 'La frutera' }, { nombre: 'Papaya', tienda: 'El mercado' }, { nombre: 'Platano', tienda: 'La frutera' }, { nombre: 'Piña', tienda: 'La frutera' }]
const tienda = 'La frutera'
Solution:
// Función que filtra las frutas que empiezan con 'P' y son de 'La frutera'
function filtrarFrutas(fruits, tienda) {
  return fruits.filter(fruit => fruit.nombre.startsWith('P') && fruit.tienda === tienda);
}

// Ejemplo de uso:
const fruits = [
  { nombre: 'Uva', tienda: 'El mercado' },
  { nombre: 'Pera', tienda: 'La frutera' },
  { nombre: 'Manzana', tienda: 'La frutera' },
  { nombre: 'Papaya', tienda: 'El mercado' },
  { nombre: 'Platano', tienda: 'La frutera' },
  { nombre: 'Piña', tienda: 'La frutera' }
];

const tienda = 'La frutera';

const resultado = filtrarFrutas(fruits, tienda);
console.log(resultado);
