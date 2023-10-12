import express from "express";
import  bodyParser from "body-parser";
import cors  from "cors";
import { DMovies } from "./data/movies.js";

const app=express();
app.use(bodyParser());
app.use(cors(["http://localhost:3000"]));

const port=4000;

app.get("/movies",(req,res)=>{
    const filter=req.query;
    const hasFilter=Object.keys(filter).length
    if(hasFilter){

        const category=filter.category;
        let filteredData=DMovies.filter(m=>category.includes(m.category))
        setTimeout(() => {
            res.json(filteredData).status(200)        
        }, 2000);

    }else{
        setTimeout(() => {
            res.json(DMovies).status(200)        
        }, 2000);
    }
})



app.get("/filters",async (req,res)=>{
    



    const categories=  Array.from(new Set(DMovies.map(x=>x.category)));
    
    const languages=Array.from(new Set(DMovies.map(x=>x.language)));
    const ratingList=DMovies.map(x=>x.rating).sort((x,y)=>x-y);
    const minRating=ratingList[0];
    const maxRating=ratingList[ratingList.length-1];

    setTimeout(() => {
        
        res.json({
            categories:categories,
            minRating:minRating,
            maxRating:maxRating,
            languages:languages
        })
        
    }, 2000);
})

app.listen(4000,function(){
    console.log(`Mock server is runing in http://localhost:${port}`)
})

