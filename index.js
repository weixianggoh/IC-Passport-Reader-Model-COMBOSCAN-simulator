// Requiring express in our server
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// Defining get request at '/' route
app.get('/', function(req, res) {
    setTimeout((() => {
        res.json({"DocumentType":"","DocumentNumber":"","Name":"","DateofBirth":"","PlaceofBirth":"","Gender":"","Nationality":"","Race":"","Address":"","Postcode":"","City":"","State":"","Religion":"","ExpiryDate":"","Photo":""});
    }), 3000)
});

// // Defining get request at '/multiple' route
// app.get('/multiple', function(req, res) {
//     res.json({
//         number: 1,
//         name: 'John',
//         gender: 'male'
//     });
// });
//
// // Defining get request at '/array' route
// app.get('/array', function(req, res) {
//     res.json([{
//         number: 1,
//         name: 'John',
//         gender: 'male'
//     },
//         {
//             number: 2,
//             name: 'Ashley',
//             gender: 'female'
//         }
//     ]);
// });

// Setting the server to listen at port 3000
app.listen(443, function(req, res) {
    console.log("Server is running at port 443");
});
