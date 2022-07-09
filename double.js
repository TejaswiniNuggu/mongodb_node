//getting input from the terminal
// console.log(process.argv)
// console.log(dbl(process.argv[2]));

const dbl = (num)=>num*2;

console.log(dbl(10))

const [, , n]=process.argv;
console.log(dbl(n))