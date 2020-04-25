// const express = require("express");
// const port = 3000;
// const app = express();

// app.get('/', function (req, res) {
//     res.send("Hello World");
// })

// app.listen(port)

// alert("Hello World")

const example = () => {
    const fromInpt= document.getElementById("example").value;
    document.getElementById("tekst").innerText = fromInpt;
}

document.getElementById("btn").addEventListener("click", example );

