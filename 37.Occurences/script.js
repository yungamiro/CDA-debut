const occurrences = (str, letter) => str.split(letter).length - 1;

console.log(occurrences("lhelol", "l")); // 3
console.log(occurrences("abcde", "e")); // 1
console.log(occurrences("zzzzzzzzzzzzz", "z")); // 13
console.log(occurrences("La victoire est à nous", "e")); // 2

/*Explication:
str : Une chaîne de caractères.
letter : Un caractère spécifique que nous voulons compter dans la chaîne.
La fonction compte le nombre d'occurrences de la lettre spécifiée dans la chaîne donnée. Voici une explication détaillée :
str.split(letter) : Cette partie divise la chaîne (str) en un tableau de sous-chaînes en utilisant le caractère spécifié (letter) comme séparateur. 
Par exemple, si str est "hello" et letter est "l", cela donnera le tableau ['he', '', 'o'].
.length - 1 : Après la division, la longueur du tableau résultant représente le nombre total de séparations effectuées, 
ce qui est égal au nombre d'occurrences de la lettre dans la chaîne. Cependant, pour obtenir le nombre réel d'occurrences, 
on soustrait 1 car la dernière partie de la chaîne n'est pas suivie de la lettre spécifiée (elle est à la fin).
cette fonction compte le nombre d'occurrences d'une lettre spécifiée dans une chaîne en divisant 
la chaîne par cette lettre comme séparateur et en retournant le nombre total de divisions, 
ajusté de manière à ne pas compter la dernière occurrence. */
