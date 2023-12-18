class Student {
  constructor(familyName, firstName, birthDate) {
    this.familyName = familyName;
    this.firstName = firstName;
    this.birthDate = birthDate;
  }

  getAge() {
    const actualYear = new Date().getFullYear();
    return actualYear - this.birthDate;
  }
}

let student1 = new Student("Dupont", "Jean", 1998);
console.log(
  `${student1.familyName} ${
    student1.firstName
  } is ${student1.getAge()} year-old.`
);

let studentNames = ["Alice", "Bob", "Charlie", "Anna", "David"];

let startsWithA = studentNames.filter((name) => name.startsWith("A"));
let upperCase = studentNames.map((name) => name.toUpperCase());

console.log("Noms commencant par A:", startsWithA);
console.log("Noms en majuscules:", upperCase);

// const timeoutPromise = () => new Promise((res) => setTimeout(res, 8000));

// await timeoutPromise();

// const messageTimeout = 3000;
// const showPromise = () => new Promise((res) => setTimeout(res, messageTimeout));

// await showPromise();

// console.log("Message after 3 seconds");

class Promotion {
  constructor() {
    this.students = [];
  }
  addStudents(familyName, firstName, birthDate) {
    let student = new Student(familyName, firstName, birthDate);
    this.students.push(student);
  }
  calculateAge() {
    let totalAges = this.students.reduce(
      (age, student) => age + student.getAge(),
      0
    );
    console.log(totalAges);
  }

  showDetails() {
    this.students.forEach((student) => {
      console.log(
        `${student.familyName} ${student.firstName} is ${student.birthDate} year-old`
      );
    });
  }

  filterLongNames() {
    return this.students
      .filter((student) => student.familyName.length >= 5)
      .map((student) => student.familyName);
  }

  alphaSort() {
    return this.students.map((student) => student.familyName).sort();
  }

  addAge(years) {
    this.students.forEach((student) => {
      student.birthDate += years;
    });
  }
}

let promotion1 = new Promotion();
promotion1.addStudents("Holee", "Phuck", 29);
promotion1.showDetails();
console.log("Âge moyen dans la promotion:", promotion1.calculateAge());

let promotion2 = new Promotion();
promotion2.addStudents("Abdallah-Khodja", "Amir", 1994);
promotion2.addStudents("Khodja", "Rayane", 1998);
promotion2.addStudents("Abdallah", "Saber", 2007);

console.log("Longest names", promotion2.filterLongNames());
console.log("Sorting name my alphabetic order", promotion2.alphaSort());

let promotion3 = new Promotion();
promotion3.addStudents("Abdallah-Khodja", "Amir", 1994);
promotion2.addStudents("Abdallah-Khodja", "Rayane", 1998);

promotion3.addAge(5)
console.log(promotion3)
