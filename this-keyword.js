const person = {
  name: "Thanh Dat",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

// 1. implicit binding
person.sayMyName();

// 2. explicit binding;
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
sayMyName.call(person);

// 3. new binding
function Person(name) {
  // create empty object: this = {}
  this.name = name;
}
const p1 = new Person("Thanh Dat New Object");
console.log(p1.name);

// 4. Default Binding
globalThis.name = "Thanh Dat Global";
sayMyName();
