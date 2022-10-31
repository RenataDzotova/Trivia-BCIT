const axios = require("axios")

var theFormOnFirstPage = document.getElementById("fromOneId")
var trueButton = document.getElementById("questionOneId")
var falseBu

console.log(theFormOnFirstPage)

trueButton.addEventListener("click", () => {
    axios.post("/somethiing", {})    
})


