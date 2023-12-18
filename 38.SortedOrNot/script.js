function isSorted(arr) {
  // Vérifie si le tableau est trié de manière ascendante
  if ([...arr].sort((a, b) => a - b).every((el, index) => el === arr[index])) {
    return "yes, ascending";
  }
  // Vérifie si le tableau est trié de manière descendante
  else if (
    [...arr].sort((a, b) => b - a).every((el, index) => el === arr[index])
  ) {
    return "yes, descending";
  }
  // Si le tableau n'est ni trié ascendant ni descendant
  else {
    return "no";
  }
}

/* ÉNONCÉ 📚 */

/* 
  Créez un algorithme qui détermine l'ordre de tri du tableau passé en argument.
  Si le tableau est dans l'ordre croissant, retournez :   "yes, ascending"
  Si le tableau est dans l'ordre décroissant, retournez : "yes, descending"
  Si le tableau n'est pas trié, retournez "no".
*/

/* Tests à passer 🧪 */

console.log(isSorted([1, 2, 3, 4, 5, 6])); // "yes, ascending"
console.log(isSorted([6, 5, 4, 3, 2, 1])); // "yes, descending"
console.log(isSorted([654, 124, 874])); // "no"

/*Explication:
[...arr].sort((a,b) => a - b) :
Crée une copie du tableau arr en utilisant l'opérateur de propagation (...).
Utilise la méthode sort pour trier la copie du tableau de manière ascendante (du plus petit au plus grand) 
en utilisant la fonction de comparaison (a, b) => a - b.


.every((el, index) => el === arr[index]) :
Utilise la méthode every pour vérifier si tous les éléments de la copie triée correspondent à ceux du tableau d'origine (arr) à la même position.
Si tous les éléments correspondent, cela signifie que le tableau d'origine est trié de manière ascendante.

return "yes, ascending"; :
Si le tableau est trié de manière ascendante, la fonction retourne la chaîne de caractères "yes, ascending".

[...arr].sort((a,b) => b - a) :
Crée une nouvelle copie du tableau arr et la trie de manière descendante (du plus grand au plus petit).

.every((el, index) => el === arr[index]) :
Utilise la méthode every pour vérifier si tous les éléments de la copie triée de manière descendante correspondent à ceux du tableau d'origine (arr) à la même position.
Si tous les éléments correspondent, cela signifie que le tableau d'origine est trié de manière descendante.

return "yes, descending"; :
Si le tableau est trié de manière descendante, la fonction retourne la chaîne de caractères "yes, descending".

return "no"; :
Si le tableau n'est ni trié de manière ascendante ni descendante, la fonction retourne la chaîne de caractères "no". */
