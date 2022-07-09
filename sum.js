// console.log("hi")

const sum=(a,b)=>a+b;
// console.log(sum(10,20))

// console.log(global)
// console.log(process.argv)
//adding two number input from terminal
const [, , n1,n2]=process.argv;
console.log(sum(+n1,+n2))