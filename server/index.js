import express from "express";
import  bodyParser from "body-parser";
import cors  from "cors";
import { DMovies } from "./data/movies.js";

const app=express();
app.use(bodyParser());
app.use(cors(["http://localhost:3000"]));

const port=4000;

app.get('/movies', (req, res) => {
    // Extract query parameters from the request
    const { category, rating, language } = req.query;

    // Filter the movies based on the query parameters
    let filteredMovies = [...DMovies];
 
    if (category || Array.isArray(category) ) {

        let totalCategory=Array.isArray(category)?[...category]:[category];

        filteredMovies = filteredMovies.filter(movie => totalCategory.includes(movie.category));
  
    }

    if (rating) {
        filteredMovies = filteredMovies.filter(movie => movie.rating <= parseFloat(rating));

    }

    if (language ||Array.isArray(language)) {
        let totalLang=Array.isArray(language)?[...language]:[language];
        filteredMovies = filteredMovies.filter(movie => totalLang.includes(movie.language));

    }

    
    // Return the filtered movies as JSON
    res.json(filteredMovies);
});


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

