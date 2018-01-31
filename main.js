//Swap Two Number Variables Without Using a Temp Variable.
console.log('------------------Exercice 2--------------------------')

var a = 9;
var b = 11;

a = a + b
b = a - b
a = a - b

console.log('a = ' + a + ' / b = ' + b)

//Swap Two String Variables Without Using a Temp Variable.
console.log('------------------Exercice 3--------------------------')

var c = "Hello";
var d = "World";

c = [c, d]
d = c[0]
c = c[1]

console.log('c = ' + c + ' / d = ' + d)

console.log('------------------Loops--------------------------')
// Create a variable N with a randomized number in it (you can use the Math.random , or just request an input from the user)
// Print in console view a sequence of N lines, each line consisting of a string of "*"'s according to the line number.

var n = prompt('Please enter a Number')
var star = '*'
var stars = [] 
var displayStars = 0
for (var i = 0; i<n; i++) {
  stars.push(star)
   displayStars = stars.join("");
  console.log(displayStars)
}

//Now do it the other way around:
var n = prompt('Please enter a Number')
var star = '*'
var stars = [];
var displayStars;
for (var i = 0; i<n; i++) {
  stars.push(star)
}
for(var i = (stars.length); i>=0; i--){
  console.log(stars.join(""))
  stars.pop()
}

