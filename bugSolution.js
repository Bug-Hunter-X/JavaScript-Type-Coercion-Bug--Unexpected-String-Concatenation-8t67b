function myFunction(a, b) {
  // Explicitly convert inputs to numbers before adding
  a = parseFloat(a);
  b = parseFloat(b);

  return a + b;
}

console.log(myFunction(5, '5')); // Output: 10
console.log(myFunction(5, 5)); //Output: 10