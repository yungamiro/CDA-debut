class Etudiant {
  constructor(nom, prenom, anneeNaissance) {
    this.nom = nom;
    this.prenom = prenom;
    this.anneeNaissance = anneeNaissance;
  }

  calculerAge() {
    const anneeActuelle = new Date().getFullYear();
    return anneeActuelle - this.anneeNaissance;
  }
}

// Exemple d'utilisation
let etudiant1 = new Etudiant("Dupont", "Jean", 1998);
console.log(
  `${etudiant1.prenom} ${etudiant1.nom} a ${etudiant1.calculerAge()} ans.`
);
let nomsEtudiants = ["Alice", "Bob", "Charlie", "Anna", "David"];

let nomsCommencantParA = nomsEtudiants.filter((nom) => nom.startsWith("A"));
let nomsEnMajuscules = nomsEtudiants.map((nom) => nom.toUpperCase());

console.log("Noms commencant par A:", nomsCommencantParA);
console.log("Noms en majuscules:", nomsEnMajuscules);

class Promotion {
  constructor() {
    this.etudiants = [];
  }

  ajouterEtudiant(nom, prenom, anneeNaissance) {
    let etudiant = new Etudiant(nom, prenom, anneeNaissance);
    this.etudiants.push(etudiant);
  }

  calculerAgeMoyen() {
    const totalAges = this.etudiants.reduce(
      (sum, etudiant) => sum + etudiant.calculerAge(),
      0
    );
    if (this.etudiants.length === 0) {
      return 0; // ou toute autre valeur par défaut
    }
  }

  afficherDetailsEtudiants() {
    this.etudiants.forEach((etudiant) => {
      console.log(
        `${etudiant.prenom} ${etudiant.nom} a ${etudiant.calculerAge()} ans.`
      );
    });
  }

  filtrerNomsLongs() {
    return this.etudiants
      .filter((etudiant) => etudiant.nom.length > 5)
      .map((etudiant) => etudiant.nom);
  }

  trierNomsAlphabetique() {
    return this.etudiants.map((etudiant) => etudiant.nom).sort();
  }

  augmenterAnneesNaissance(nombreAnnees) {
    this.etudiants.forEach((etudiant) => {
      etudiant.anneeNaissance += nombreAnnees;
    });
  }

  afficherDetailsApresAugmentation() {
    console.log(
      "Détails des étudiants après augmentation des années de naissance:"
    );
    this.afficherDetailsEtudiants();
  }
}

// Exemple d'utilisation
let promotion1 = new Promotion();
promotion1.ajouterEtudiant("Dupont", "Jean", 1998);
promotion1.ajouterEtudiant("Doe", "Jane", 1995);

promotion1.afficherDetailsEtudiants();
console.log("Âge moyen dans la promotion:", promotion1.calculerAgeMoyen());

let promotion2 = new Promotion();
promotion2.ajouterEtudiant("Dupont", "Jean", 1998);
promotion2.ajouterEtudiant("Doe", "Jane", 1995);
promotion2.ajouterEtudiant("Smith", "Alice", 1997);

console.log("Noms longs:", promotion2.filtrerNomsLongs());
console.log(
  "Noms triés par ordre alphabétique:",
  promotion2.trierNomsAlphabetique()
);

let promotion3 = new Promotion();
promotion3.ajouterEtudiant("Dupont", "Jean", 1998);
promotion3.ajouterEtudiant("Doe", "Jane", 1995);

promotion3.augmenterAnneesNaissance(5);
promotion3.afficherDetailsApresAugmentation();
