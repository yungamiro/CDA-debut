function romanConverter(num) {
  // Définition des bases décimales et de leurs équivalents romains
  const decimalBase = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumbers = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // Initialise une chaîne vide pour stocker le résultat en chiffres romains
  let result = "";

  // Boucle à travers les bases décimales
  for (let index = 0; index < decimalBase.length; index++) {
    // Utilisation d'une boucle while pour ajouter les symboles romains au résultat
    while (num >= decimalBase[index]) {
      result += romanNumbers[index];
      num -= decimalBase[index];
    }
  }

  // Retourne le résultat en chiffres romains
  return result;
}

/* ÉNONCÉ 📚 */

/*
Créez un algorithme qui transforme le paramètre "num" en son équivalent en chiffre romain et retournez-le.
Vous disposez des deux tableaux (decimalBase et romanNumbers) pour faire les conversions.
*/

/* Tests à passer 🧪 */

console.log(romanConverter(36)); // XXXVI
console.log(romanConverter(2000)); // MM
console.log(romanConverter(5648)); // MMMMMDCXLVIII

/*Explication
const decimalBase et const romanNumbers :
Ces deux tableaux définissent les bases décimales et leurs équivalents romains associés. 
Par exemple, 1000 est représenté par 'M', 900 par 'CM', et ainsi de suite.

let result = ""; :
Initialise une chaîne vide (result) qui sera utilisée pour construire la représentation romaine du nombre.

for(let index = 0; index < decimalBase.length; index++) :
C'est une boucle qui itère à travers les bases décimales.

while(num >= decimalBase[index]) :
Utilise une boucle while pour ajouter les symboles romains 
au résultat tant que num est supérieur ou égal à la base décimale actuelle.
À chaque itération de la boucle while, le symbole romain correspondant est ajouté à result, 
et la valeur de num est réduite de la base décimale correspondante.

return result; :
Retourne la chaîne résultante, qui représente la conversion du nombre donné en chiffres romains. */
