function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// tạo method thông qua prototype để tất cả các instance đều có method này
Person.prototype.getName = function () {
  return this.firstName + " " + this.lastName;
};

const p1 = new Person("Thanh", "Dat");
const p2 = new Person("Dat", "09");

// chỉ instance p1 mới có method getFirstName
p1.getFirstName = function () {
  return this.firstName;
};

// console.log(p1.getFirstName()); // Thanh
// console.log(p2.getFirstName()); // error

function SuperHero(firstName, lastName) {
  Person.call(this, firstName, lastName); // thừa kế Person
  this.superhero = true;
}

// tạo method để tất cả instance của Superhero đều có
SuperHero.prototype.fightCrimeBefore = function () {
  console.log("fight crime before");
};

// prototype thừa kế prototype
//    --> SuperHero có method getName
//    --> SuperHero mất đi method fightCrimeBefore
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.contructor = SuperHero;

// tạo method để tất cả instance của Superhero đều có
SuperHero.prototype.fightCrimeAfter = function () {
  console.log("fight crime after");
};

const batman = new SuperHero("Cho", "Dien");

console.log(batman.firstName);
console.log(batman.getName());
// batman.fightCrimeBefore(); // error
batman.fightCrimeAfter();
