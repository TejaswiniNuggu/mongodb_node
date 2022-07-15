// const express=require("express");
import express from "express";
import {MongoClient} from "mongodb";
import dotenv from 'dotenv';
import cors from'cors';
dotenv.config();

console.log(process.env.MONGO_URL)
const app=express();

const PORT=process.env.PORT;
//declaring express.json to all the intercepts
// middleware-express.json(convert the body to json data) 
app.use(express.json())
app.use(cors());
// app.listen(PORT,()=>console.log("app started in port 4000"));

//below is the code to connect to mongodb server
// const MONGO_URL = "mongodb://localhost";

// const MONGO_URL=
// "mongodb+srv://tejaswininuggu:Tejudatabase@cluster0.g7gvc.mongodb.net"
//to not track the url
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
    const client=new MongoClient(MONGO_URL);
    await client.connect();
    console.log("mongodb connected");
    return client;
}

const client= await createConnection();


app.get("/",function(request,response){
response.send("hello world");
});


app.get("/movies",async function(request,response){
   
   const movies =  await client.db("b32we")
    .collection("movies").find({}).toArray();
    response.send(movies);
});
//get movies from mongodb to postman

// app.get("/movies", async function(request,response){
//     if(request.query.rating){
//         request.query.rating = +request.query.rating;
//     }
//     //cursor=>pagination | cursor=>array 
//     const movies =  await client.db("b32we")
//     .collection("movies").find({}).toArray();
//     response.send(movies);
// });


//get movie with a particular id 
app.get("/movies/:id",async function(request,response){
    const { id } = request.params;
    console.log(request.params,id);
   
//get movies data from mongodb
const movie =  await client
.db("b32we").
collection("movies").
findOne({id});
    // const movie=movies.find((mv)=>mv.id==id);
    // response.send(movie);
    console.log(movie);
    movie? response.send(movie):response.send({msg:"movie not found"})
});


// //create movies
app.post("/movies",async function(request,response){
    const data=request.body;
    console.log(data);
    const result =  await client.db("b32we").collection("movies").insertMany(data);
    console.log(result)
    response.send(result);
});

// app.delete("/movies/:id",async function(request,response){
//     const { id } = request.params;
//     console.log(request.params,id);
// //get movies data from mongodb
// const result =  await client
// .db("b32we")
// .collection("movies").deleteOne({id:id});
//     // console.log(movie);
//     result.deletedCount>0 
//     ? response.send({msg:"movie deleted"});
//     ? response.send({msg:"movie not found"});
// });
app.listen(PORT,()=>console.log(`app started in ${PORT} `))


