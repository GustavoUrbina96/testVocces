// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
  const elementsCounts = array.reduce((counts, element) => {
    counts[element] = (counts[element] || 0) + 1;
    return counts;
  }, {});

  const topThree = Object.entries(elementsCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([element]) => element);

  return topThree;
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]); // [ 1, 3, 2 ]
numbersTop(["a", 3, 2, "a", 2, 3, "a", 3, 4, "a", "a", 1, "a", 2, "a", 3]); // [ 'a', 3, 2 ]
