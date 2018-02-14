// // arguments function is no longer bound
//
// const add = function (a,b) {
//   console.log(arguments);
//   return a + b;
// // arguments not accessible here for arrow function but is for ES5
// }
// //console.log(add(31,48,100));
//
// // this keyword is no longer bound
// const user = {
//   name: "D Diggity",
//   cities: ["Palatine", "DeKalb", "Chicago", "Los Angeles", "Downers Grove"],
//   printPlacesLived(){
//     // const cityMessages = this.cities.map((city) => {
//     //   return this.name + ' has lived in ' + city;
//     // });
//     // return cityMessages;
//
//     //concise version
//     const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
//     return cityMessages;
//
//     //this.cities.forEach((city) =>{
//     //  console.log(this.name+" has lived in "+city);
//     //});
//   }
// };
// console.log(user.printPlacesLived());
// //user.printPlacesLived();

const multiply = {
  numbers: [1,2,3,5,8,13,21],
  operand: 3,
  doMultiplication(){
    return this.numbers.map((number) => this.operand * number);
  }
};
console.log(multiply.doMultiplication());
