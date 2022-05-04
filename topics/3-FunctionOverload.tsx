// function add(a, b) {
//   if (b === undefined) return (b) => a + b;
//   return a + b;
// }

add(2, 2); // returns 4
add(2); // should return a function that accepts the second number

const addTwo = add(2);
addTwo(3); // returns 5

// Doesn't work:

// function add(
//   first: number,
//   second?: number
// ): number | ((second: number) => number) {
//   if (second === undefined) return (second: number) => add(first, second);
//   return first + second;
// }

// Works:

// function add(first: number): (second: number) => number;
// function add(first: number, second: number): number;
// function add(
//   first: number,
//   second?: number
// ): number | ((second: number) => number) {
//   if (second === undefined) return (second: number) => add(first, second);
//   return first + second;
// }
