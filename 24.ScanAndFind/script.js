function scanAndFind(data, source) {
  return data.filter(obj => 
    Object.keys(source).every(key => obj[key] === source[key]))
}

console.log(
  scanAndFind(
  [
    { prenom: "Tom", nom: "Durand" },
    { prenom: "Juliette", nom: "Garcia" },
    { prenom: "Jean", nom: "Lafite" },
    { prenom: "Lucien", nom: "Lafite" },
    { prenom: "Lucien", abc: "Lafite" }
  ], 
    { nom: "Lafite" }
  )
);
  // Résultat -> [{ prenom: 'Jean', nom: 'Lafite' },{ prenom: 'Lucien', nom: 'Lafite' }]

console.log( 
  scanAndFind(
  [
    { prenom: "Joe", code: 65421 },
    { prenom: "John", id: 556487 },
    { prenom: "Melinda", identification: 54834 },
    { prenom: "Rose", id: 68784 },
    { prenom: "Jack", id: 41244 }
  ], 
    { id: 556487 }
  )
);
  // Résultat -> [ { prenom: 'John', id: 556487 } ]

