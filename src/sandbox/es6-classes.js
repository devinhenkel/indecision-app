//Class

class Person {
  constructor (name = 'Anonymous', age = 1) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    //return "Hi, I am " + this.name;
    return `Hello, my name is ${this.name}, and I am ${this.age} year${this.age === 1 ? '' : 's'} old.`;
  }
  getDescription(){
    return `You are looking at the profile for ${this.name}. This person is ${this.age} year${this.age === 1 ? '' : 's'} old.`
  }
}

//sub-class - extends class. 'super' refers to parent class.
class Student extends Person {
  constructor (name, age, major) {
    super(name, age);
    this.major = major;
  }
  getMajor(){
    return `This student's major is ${this.major}`;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if (this.hasMajor()){
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor (name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation(){
    return !!this.homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if (this.hasLocation()){
      greeting += ` I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler("Devin Henkel-Legare", 53, "Chicago");
console.log(me);

const him = new Student("Bob McBob", 45, "Basketweaving");

const her = new Traveler(undefined, undefined, "Nowhere");
console.log(her);
