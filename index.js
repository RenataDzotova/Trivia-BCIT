const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const quizpagePath =  path.join(__dirname,'views/quiz.ejs')
const q1 = path.join(__dirname,'views/question.ejs')
// const {allQuestions} = require('./database')
// const scorepagePath =  path.join(__dirname,'views/score.ejs')
// const quizpagePath = path.join(__dirname, 'views/quiz.ejs')
// const q1 = path.join(__dirname, 'views/question.ejs')
const { allQuestions } = require('./database')

// app.get('/score', (req, res)=>{
// res.render(scorepagePath)
// })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.set("view engine", "ejs");
var publicdir = path.join(__dirname, 'public');
app.use(express.static(publicdir));
var stylesdir = path.join(__dirname, 'styles');
app.use(express.static(stylesdir));


// app.get('/quiz', (req,res)=>{
//     res.render('/quiz')
// })

app.get('/score', (req,res)=>{
    var name = req.query.name
    console.log(name)
    res.render('score',{data:name})
    //grab result from here
})



app.get('/', (req, res)=>{
    // console.log(req.query) //? This will now make an object out of whatever query is inserted in the searchbar, for example, "localhost:3000/?name=cocoa" will console.log { name: 'cocoa' }
    res.render(quizpagePath)
// app.get('/', (req, res) => {
//   // console.log(req.query) //? This will now make an object out of whatever query is inserted in the searchbar, for example, "localhost:3000/?name=cocoa" will console.log { name: 'cocoa' }
//   res.sendFile(quizpagePath)
})



app.get('/quiz', (req, res) => {
  console.log(allQuestions)
  res.render(q1, {
    allQuestions,
    qnum: Number(req.query.q)
  })
})


var finalScore = Math.max(0)
app.get('/checkAnswer', (req, res) => {
  var score = 0

  // const questionNumber = req.query.question
  // const data = allQuestions[questionNumber]
  // console.log(allQuestions[req.query.answer].ans)
  // console.log(allQuestions[req.query.answer].ans)
  // console.log(req.query.question)
  // res.render('question', data)
  if ((req.query.question) === allQuestions[req.query.answer].ans) {
    score++;
    finalScore = finalScore + score;
    res.json({ fact: true, score: score, image: allQuestions[req.query.answer].happy, finalScore: finalScore });


  } else {
    score;
    res.json({ fact: false, score: score, image: allQuestions[req.query.answer].sad, finalScore: finalScore });
  }



  // res.render(__dirname + "/views/questionTwo.html", {score:score})
  //?body key is for posts   //?params is for gets
  // if(Number(req.query.answer) === answerkey[req.query.question]){
  //   res.json({fact:true, score:score});
  //   score ++

  // } else {
  //   res.json({fact:false, score:score});
  //   if(score >= 1){
  //       score--;
  //   } else {
  //       score
  //   }
  // }
})

// res.sendFile(trueFile)



// app.get('/quiz', (req, res)=>{
//   res.sendFile(quizpagePath)
// })

// //Chris Wrote This ==>
// app.get('/someData',(req,res)=>{
//   // res.end(req.query)
//   res.json({name:'chris'})
// })
// //<== Chris Wrote This
const PORT = 3000
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})




// app.get('/q2', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q2)
// })

// app.get('/q3', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q3)
// })

// app.get('/q4', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q4)
// })

// app.get('/q5', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q5)
// })

// app.get('/q6', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q6)
// })

// app.get('/q7', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q7)
// })

// app.get('/q8', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q8)
// })

// app.get('/q9', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q9)
// })

// app.get('/q10', (req, res)=>{
//   // console.log(req.query)
//   res.sendFile(q10)
// })

// //To display the final score.
// var result = ("YOUR FINAL SCORE IS: " + score + "/5")
// console.log(result)


// var readlineSync = require("readline-sync");

// console.log("Welcome to the BCIT Teacher Quiz");

// //this is line breaker, like it leaves a line.
// console.log("\n");


// var username = readlineSync.question("Your Name? ");

// console.log("\n");

// console.log("Welcome to THE QUIZ, " + username + "!");

// var score = 0;
// // if(document.getElementById('correct').checked){
// //     score++
// // }

// function quiz(question, answer) {
//   var userAnswer = readlineSync.question(question);
//   if (userAnswer == answer) {
//     console.log("correct! ");
//     score++;
//   }
//   else {
//     console.log("wrong! ");
//     score--;
//   }
//   console.log("your score is ", score);
//   console.log("-------------------");
// }

// //questions
// var questions = [
//   {
//     question: "Which fact is false about Darinka?",
//     q1: "a) Has travelled to 35+ countries",
//     q2: "b) Favourite holiday is Christmas",
//     q3: "c) Had 2 pet spider monkeys at home",
//     q4: "d) Dug up dinosaurs in 2015 in Alberta",
//     answer: "b"
//   },
//   {
//     question: "Which fact is false about Amalia?",
//     q1: " a) Can name all the US States in alphabetical order",
//     q2: " b) Has met Prince Harry  ",
//     q3: " c) I've seen Gilmore Girls 10 times through",
//     q4: " d) Can't go to bed without a cup of tea every night",
//     answer: "d"
//   },
//   {
//     question: "Which fact is false about Chris?",
//     q1: " a) He has watched Friends 10 times",
//     q2: " b) He can speak chinese fluently",
//     q3: " c) He can juggle with 4 balls",
//     q4: " d) He has eaten frogs before",
//     answer: "c"
//   },
//   {
//     question: "Which fact is false about Wim?",
//     q1: " a) He wears wet socks during summer",
//     q2: " b) He is related to a Dutch Prince",
//     q3: " c) He has goat milk hot chocolate with honey everyday",
//     q4: " d) He was in a hacker group in the 80's",
//     answer: "a"
//   },
//   {
//     question: "Did you like the quiz?",
//     q1: "yes or",
//     q2: "no",
//     q3: "",
//     q4: "",
//     answer: "yes"
//   }
// ];

// //LOOP
// for (var i = 0; i < questions.length; i++) {
//   var currentq = questions[i];
//   quiz(currentq.question + "\n" + currentq.q1 + "\n" + currentq.q2 + "\n" + currentq.q3 + "\n" + currentq.q4 + "\n" , currentq.answer);
// }

// //To display the final score.
// var result = ("YOUR FINAL SCORE IS: " + score + "/5")
// console.log(result)




// var readlineSync = require("readline-sync");

// console.log("welcome to F.R.I.E.N.D.S. quiz");

// //this is line breaker, like it leaves a line.
// console.log("\n");









// var username = readlineSync.question("Your Name? ");

// console.log("\n");

// console.log("Welcome to THE QUIZ, " + username + "!");

// var score = 0;
// function quiz(question, answer) {
//   var userAnswer = readlineSync.question(question);
//   if (userAnswer == answer) {
//     console.log("correct! ");
//     score++;
//   }
//   else {
//     console.log("wrong! ");
//     score--;
//   }
//   console.log("your score is ", score);
//   console.log("-------------------");
// }

// //questions
// var questions = [
//   {
//     question: "how many iron man suits did tony stark create in the cinematic universe? ",
//     answer: "85"
//   },
//   {
//     question: "Name of Thor's original hammer",
//     answer: "mjolnir"
//   },
//   {
//     question: "Where was Mjolnir forged?",
//     answer: "Nidavellir"
//   },
//   {
//     question: "Father of the God of Thunder",
//     answer: "Odin"
//   },
//   {
//     question: "Who is the god of mischief?",
//     answer: "Loki"
//   },
//   {
//     question: "Did you like the quiz?",
//     answer: "yes"
//   }
// ];

// //LOOP
// for (var i = 0; i < questions.length; i++) {
//   var currentq = questions[i];
//   quiz(currentq.question, currentq.answer);
// }

// //To display the final score.

// console.log("YOUR FINAL SCORE IS: " + score + "/10")