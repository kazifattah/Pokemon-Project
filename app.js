// importing express
// setting portnumber
const express = require('express');
const app = express();
const port = 3000;

// importing module required to generate random greeting
const pokemon = require('./utils/random-pokemon');

let pokemonname = pokemon.getRandomPokemon()[1];
let pokemonnumber = pokemon.getRandomPokemon()[0];



app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

// calling a middleware method to access css file within the public directory
app.use('/public', express.static('public'));
app.use('/client', express.static('client'));


// using ejs to serve webpages

app.get('/',(req,res)=>{
    res.render('homepage', {pokemonname, pokemonnumber, pageTitle: "Home"}); // sends the random pokemon name generated into the ejs page
});

app.get('/about',(req,res)=>{
    res.render('about', {pageTitle: "About Pokemon"});
});

app.get('/teamcreator',(req,res)=>{
    res.render('teamcreator', {pageTitle: "Random Team Generator"});
});


// endpoint for the 404 page
app.use((req,res)=>{
    res.status(404).render('404',{pageTitle: "Page Not Found"});
});

// starting the server

app.listen(port, ()=>{
    console.log("the server is running on port 3000")
});