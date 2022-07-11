import { writeFile } from 'fs';
const quote="created a file"
// writeFile('./awesome/vdhbvx.html',quote,(err)=>{
//     console.log("done")
// })

// import { writeFile } from 'fs';
//creating a file with quote in a particular folder

// for(let k=1;k<=5;k++){
// writeFile(`./bacp/text-${k}.html`,quote,(err)=>{
//     console.log("done")
// })
// }
//creating file by taking input from terminal
// const quote2="file 2"
// const [, , n]=process.argv;
// for(let i=1;i<=n;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
//         console.log("done")
//     })
//     }


// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("eror",err);

//     }
//     else{
//         console.log(data);
//     }
// });


//updating a file
// const quot3="make everydaya"
// fs.appendFile(`./nice.txt`,"\n" + quot3, (err)=>{
//     console.log("completed updating");
// });

//deleting a file
// fs.unlink("./delete.html",(err)=>{
//     console.log("completed deleting")
// })



// fs.readdir(__dirname, 
//     { MONGODB_NODE: true },
//     (err, files) => {
//     console.log("\nCurrent directory files:");
//     if (err)
//       console.log(err);
//     else {
//       files.forEach(file => {
//         console.log(file);
//       })
//     }
//   })