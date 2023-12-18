function sortedStudents(arr) {
  // Affiche la moyenne des notes du premier étudiant dans le tableau
  // console.log(
  //   arr[0].grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length
  // );

  // Tri du tableau d'objets en fonction de la moyenne des notes de chaque étudiant
  return arr.sort((a, b) => {
    // Calcule la moyenne des notes de l'étudiant b et soustrait la moyenne des notes de l'étudiant a
    return (
      b.grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length -
      a.grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length
    );
  });
}

/* .sort() */
// > 0 a après b
// < 0 a avant b
// === 0 garder l'ordre

// (a,b) => a - b // ordre croissant

// [10,5,15]
// 10 - 5 = 5     a passe après b
// [5,10,15]
// 10 - 15 = -5   a reste avant b

// (a,b) => b - a // ordre décroissant

// [10,5,15]
// 5 - 10 = -5    a reste avant b
// [10,5,15]
// 15 - 5 = 10    a après b
// [10,15,5]
// 15 - 10 = 5    a après b
// [15,10,5]

/* ÉNONCÉ 📚 */

/*  
  Vous recevez un tableau rempli d'objets représentant les élèves d'une classe et leurs notes.
  Retournez un tableau dont les objets précédents ont été triés par ordre décroissant en fonction de la moyenne de chaque élève.
*/

/* Test à passer 🧪 */

console.log(
  sortedStudents([
    { name: "Tom", grades: [1, 3, 5, 9, 2, 7] },
    { name: "Jack", grades: [20, 4, 18, 10, 14, 12] },
    { name: "Ana", grades: [11, 14, 3, 14, 12, 14] },
    { name: "Sara", grades: [10, 12, 14, 15, 14, 19] },
  ])
);

/* Returns */

/* 
[
  { name: 'Sara', grades: [ 10, 12, 14, 15, 14, 19 ] },
  { name: 'Jack', grades: [ 20, 4, 18, 10, 14, 12 ] },
  { name: 'Ana', grades: [ 11, 14, 3, 14, 12, 14 ] },
  { name: 'Tom', grades: [ 1, 3, 5, 9, 2, 7 ] }
]
*/

/*Explications
console.log(...) :
Affiche dans la console la moyenne des notes du premier étudiant dans le tableau arr. 
Cela donne un aperçu de la moyenne des notes avant le tri du tableau.

arr[0].grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length :
Calcule la moyenne des notes du premier étudiant dans le tableau arr. 
La méthode reduce est utilisée pour additionner toutes les notes de l'étudiant, 
puis le résultat est divisé par la longueur du tableau grades de l'étudiant.

arr.sort((a, b) => { ... }) :
Utilise la méthode sort() pour trier le tableau d'objets arr en fonction d'une fonction de comparaison fournie en argument.
La fonction de comparaison prend deux arguments, a et b, qui représentent deux objets du tableau.

b.grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length - a.grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length :
Calcule la différence entre les moyennes des notes de l'étudiant b et de l'étudiant a.
La fonction de comparaison utilise la même logique que précédemment, 
où les moyennes des notes sont calculées en utilisant reduce et en divisant par la longueur du tableau grades du premier étudiant dans arr. 

la fonction sortedStudents affiche la moyenne des notes du premier étudiant dans le tableau, 
puis trie le tableau d'objets représentant des étudiants en fonction de la moyenne de leurs notes, 
du plus élevé au plus bas. La méthode sort est utilisée avec une fonction de comparaison personnalisée basée sur la moyenne des notes de chaque étudiant. */
