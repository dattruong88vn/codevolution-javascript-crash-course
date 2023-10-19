class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const p1 = new Person("Thanh", "Dat");
console.log(p1.getFullName());

class SuperHero extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.isSuperHero = true;
  }

  fightCrime() {
    console.log("Fight Crime");
  }
}

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.getFullName());
batman.fightCrime();
