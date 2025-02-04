// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
  return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
  return Math.max(...arreglo);
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
  return arreglo.filter(numero => numero % 2 === 0);
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
  const vocales = 'aeiouAEIOU';
  return [...texto].filter(letra => vocales.includes(letra)).length;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
  return arreglo.slice().reverse();
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
  const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return suma / notas.length;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
  return [...texto].filter(char => char === letra).length;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
  return [...new Set(arreglo)];
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
  const textoLimpio = texto.replace(/[\W_]/g, '').toLowerCase();
  return textoLimpio === textoLimpio.split('').reverse().join('');
}
