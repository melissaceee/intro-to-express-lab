
const express = require('express')
const app = express();

//BE POLITE, GREET THE USER

// app.get('/greetings/:username', (req, res) => {
//     res.send(`Hello there, ${req.params.username}!`);
// });

//ROLLING THE DICE

// app.get ('/roll/:number', (req, res)=> {
//     const number = parseInt (req.params.number,10);
//     if (isNaN(number)) {
//         res.send ('You must specify a number.')
//     } else{
//         const randomRoll = Math.floor(Math.random()*(number+1))
//         res.send (`You rolled ${randomRoll}.`)
//     }
// })

// I want THAT ONE
// const collectibles = [
//     { name: 'shiny ball', price: 5.95 },
//     { name: 'autographed picture of a dog', price: 10 },
//     { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//   ];


// app.get ('/collectibles/:index', (req, res)=> {
// const index = parseInt (req.params.index, 10);
// if (index >=0 && index <collectibles.length){
//     const item= collectibles[index]
//     res.send(`So, you want the ${item.name}? For ${item.price}dollars, it can be yours! `)
// }
// else {
//     res.send ('This item is not yet in stock. Check back soon!')
// }
// })


// Filter Shoes by Query Parameters
// const shoes = [
//     { name: "Birkenstocks", price: 50, type: "sandal" },
//     { name: "Air Jordans", price: 500, type: "sneaker" },
//     { name: "Air Mahomeses", price: 501, type: "sneaker" },
//     { name: "Utility Boots", price: 20, type: "boot" },
//     { name: "Velcro Sandals", price: 15, type: "sandal" },
//     { name: "Jet Boots", price: 1000, type: "boot" },
//     { name: "Fifty-Inch Heels", price: 175, type: "heel" }
// ];


//need help on question 4- stuck on this one.

app.listen(3000,()=> {
    console.log (`server is running`)
})


