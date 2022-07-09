const fs=require('fs');
// const quote="created a file"
// fs.writeFile('./awesome.html',quote,(err)=>{
//     console.log("done")
// })


//creating a file with quote in a particular folder

// for(let k=1;k<=i;K++){
// fs.writeFile(`./backup/text-${K}.html`,quote,(err)=>{
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
const quot3="make everydaya"
fs.appendFile(`./nice.txt`,"\n" + quot3, (err)=>{
    console.log("completed updating");
});

//deleting a file
// fs.unlink("./delete.html",(err)=>{
//     console.log("completed deleting")
// })