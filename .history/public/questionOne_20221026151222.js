const axios = require("axios")

var theSubmitButton = document.getElementById("questionOneId")

theSubmitButton.addEventListener("click", () => {
    axios.post("/")    
})