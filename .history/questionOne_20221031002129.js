const express = require('express')
const app = express()

var theFormOnFirstPage = document.getElementById("fromOneId")
var trueButton = document.getElementById("true")
var falseButton = document.getElementById("false")

console.log(theFormOnFirstPage)

trueButton.addEventListener("click", () => {
    app.post("/false", {})    
})
falseButton.addEventListener("click", () => {
    const res = fetch(`http://localhost:3000/true`).then(async (data)=>{
        console.log(await data.json())
    }) 
})



