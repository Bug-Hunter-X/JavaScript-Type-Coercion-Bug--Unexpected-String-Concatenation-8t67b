# JavaScript Type Coercion Bug: Unexpected String Concatenation

This repository demonstrates a common JavaScript bug related to type coercion and the '+' operator.  The bug arises from the fact that JavaScript's '+' operator will perform string concatenation if either operand is a string. This can lead to unexpected results when performing mathematical operations.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version.

## Bug Description
The function `myFunction` attempts to add two values, but if one is a string, the result is string concatenation instead of numerical addition.

## Solution
The solution involves explicitly converting the inputs to numbers using `parseInt()` or `parseFloat()` before performing the addition to ensure correct numerical addition.

## How to Run
1. Clone the repository.
2. Open the `bug.js` and `bugSolution.js` files in your preferred code editor.
3. Run the JavaScript code in a browser's console or a Node.js environment.