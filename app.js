// const http=require('http');
// const handler = (request, response) => {
//     console.log("sample message")
//     response.end("Hello World")
// }
// const server= http.createServer(handler);
// const port = 3000;


// const functions = require('./functions')

// functions.helloWorld()
// functions.sum(2,3)

// console.log("Hello World");

// server.listen(port, (err) => {
//     if (err) {
//         return console.log("coś poszło nie tak...", err)
//     }
//     console.log("server działa na porcie", port)
// })

// ---------------------------

// const express = require('express');

// const app = express();
// const port = 3000;

// app.get("/", function (req, res) {
//     res.send("Hello World")
// })

// app.get("/thoughts", function (req, res) {
//     res.send("My portfolio")
// })

// app.listen(port, (err) => {
//     if (err) {
//         return console.log("coś poszło nie tak...", err)
//     }
//     console.log("server działa na porcie", port)
// })

//  ---------hbs-----------

const importFunct = require("./functions")

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", 'hbs');

//Podpięcie css

const path = require('path')

app.use('/assets', express.static(path.join(__dirname,"./assets")));
app.use('/js', express.static(path.join(__dirname,"./js")));

app.get("/", function (req, res) {

    const aaa = () => {
        return "proba"
    }

    res.render("index", {
        pageTitle: "Lekcja 01",
        subTitle: importFunct.someTitle,
        newVar: aaa()
    })
})

app.get("/kasia", function (req, res) {
    res.render("kasia")
})



app.listen(port, (err) => {
    if (err) {
        return console.log("coś poszło nie tak...", err)
    }
    console.log("server działa na porcie", port)
})



