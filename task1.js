import { writeFile } from 'fs';


// const timestamp = Date.now();
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
