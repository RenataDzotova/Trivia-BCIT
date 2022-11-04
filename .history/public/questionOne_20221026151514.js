const axios = require("axios")

var theFormOnFirstPage = document.getElementById("fromOneId")
var theSubmitButton = document.getElementById("questionOneId")

theSubmitButton.addEventListener("click", () => {
    axios.post("/somethiing", {})    
})


