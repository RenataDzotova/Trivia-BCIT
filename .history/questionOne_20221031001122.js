const axios = require("axios")

var theFormOnFirstPage = document.getElementById("fromOneId")
var trueButton = document.getElementById("true")
var falseButton = document.getElementById("false")

console.log(theFormOnFirstPage)

trueButton.addEventListener("click", () => {
    axios.post("/somethiing", {})    
})
trueButton.addEventListener("click", () => {
    axios.post("/somethiing", {})    
})


