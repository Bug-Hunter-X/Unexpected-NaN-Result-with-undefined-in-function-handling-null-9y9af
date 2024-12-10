function foo(a, b) {
  // Explicitly check for undefined along with null
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; 
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null));//0
console.log(foo(undefined,2)); //0
console.log(foo(1,undefined)); //0