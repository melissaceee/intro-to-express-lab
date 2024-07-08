
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



app.listen(3000,()=> {
    console.log (`server is running`)
})


