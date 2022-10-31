/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.sum = a + b;
  this.subtraction = a - b;
  this.multiplication = a * b;
  this.division = a / b;
}

let calculator = new Calculator(5, 5);
console.log(calculator);

function Calculator1(a, b) {
  this.sum = function () {
    return `Sum: ${a + b}`;
  };
  this.subtraction = function () {
    return `Subtraction: ${a - b}`;
  };
  this.multiplication = function () {
    return `Multiplication: ${a * b}`;
  };
  this.division = function () {
    return `Division: ${a / b}`;
  };
}
let calc = new Calculator1(5, 5);
console.log(calc.sum());
console.log(calc.subtraction());
console.log(calc.multiplication());
console.log(calc.division());
