const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var theFormOnFirstPage = document.getElementById("fromOneId")
var trueButton = document.getElementById("true")
var falseButton = document.getElementById("false")

console.log(theFormOnFirstPage)

trueButton.addEventListener("click", () => {
    app.post("/false", {})    
})
falseButton.addEventListener("click", () => {
    app.post("/true", {})    
})


