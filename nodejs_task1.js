
import { readdirSync } from 'fs';
import { extname } from 'path';
import { writeFile } from 'fs';
import express from "express";
// const PORT=4000
// retriev file from the folder 
const task=express();
const PORT=4001;
// const ap=express();
// ap.get("/",function(request,response){
// response.send("hello world");
// });

// ap.listen(PORT,()=>console.log("app started in port 4001"));



const testFolder = './task(ymd)/';
readdirSync(testFolder).forEach(file =>
    {
        if (extname(file) == ".html")
          console.log(file);
      }
    );

    // content of the file to be timestamp
    const dateObject = new Date();
    // current date
    // adjust 0 before single digit date
    const date = (`0 ${dateObject.getDate()}`).slice(-2);
     
    // current month
    const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
     
    
    const year = dateObject.getFullYear();
     
    
    const hours = dateObject.getHours();
     
    
    const minutes = dateObject.getMinutes();
     
    
    const seconds = dateObject.getSeconds();
     
    
    const ymd=(`${year}-${month}-${date}`)
    
     
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    const ymdhms =(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`)
    
     
    // prints time in HH:MM format
    const hm=(`${hours}:${minutes}`)
    
    writeFile(`./task(ymd)/test-${ymd}.html`,ymdhms,err => {
        console.log("completed");
    })
    
//   listen(PORT,()=>console.log(`app started in ${PORT} `))