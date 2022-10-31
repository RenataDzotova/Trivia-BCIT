const axios = require("axios")

var theFormOnFirstPage = document.getElementById("fromOneId")
var trueButton = document.getElementById("true")
var falseButton = document

console.log(theFormOnFirstPage)

trueButton.addEventListener("click", () => {
    axios.post("/somethiing", {})    
})


