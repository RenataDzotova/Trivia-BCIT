const axios = require("axios")

var theFormOnFirstPage = document.getElementById("fromOneId")
var theSubmitButton = document.getElementById("questionOneId")

console.log(theFormOnFirstPage)

theSubmitButton.addEventListener("click", () => {
    axios.post("/somethiing", {})    
})


