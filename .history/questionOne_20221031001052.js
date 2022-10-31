const axios = require("axios")

var theFormOnFirstPage = document.getElementById("fromOneId")
var trueButton = document.getElementById("questionOneId")
var falseButton

console.log(theFormOnFirstPage)

trueButton.addEventListener("click", () => {
    axios.post("/somethiing", {})    
})


