var readLineSync=require
('readline-sync')

var chalk=require("chalk")
var score=0; 
console.log(chalk.blue('Welcome to the CSS WARS'));

var userName =readLineSync.question("What is your name :")
console.log(userName)


var highScorers={
  "deepak":5,
  "john":3
}




var questions=[

{
  "question":"Who of the following is not a CSS Selector",
  "answer":2,
  "options":[".","@","#"]
},
{
  "question":"Which of the following is a wrong value for property display",
  "answer":3,
  "options":["flex","grid","container"]
},
{
  "question":"Adding CSS in the HTML tag is called as ",
  "answer":2,
  "options":["External CSS","Inline CSS","External CSS"]
},
{
  "question":"Which keyword is used to overwrite CSS styles  ",
  "answer":1,
  "options":["!important","focus","active"]
},
{
  "question":"Apart from hover and focus which is one other state  a button can be in",
  "answer":3,
  "options":["stroked","clicked","Active"]
}

]

function check(answer,userAnswer){

if(answer==userAnswer){
console.log("is the Righttt Answerrr...")
score=score+1;
}
else{
console.log(chalk.black.bgWhite.bold("is the Wrong Answer..."))


}

}

for(var i=0;i<questions.length;i++){

var currentQuestion=questions[i]
console.log(currentQuestion.question)
for(var j=0;j<currentQuestion.options.length;j++){
  console.log(j+1+" "+currentQuestion.options[j])
}
// console.log(questions[i].options[i+1])
var userAnswer=readLineSync.question("")
console.log(currentQuestion.options[userAnswer-1])
check(currentQuestion.answer,userAnswer)

}
console.log("You Scored" ,score)


console.log("----------------------------------------")

console.log("High Scrorers are") 
console.log("Deepak :",highScorers.deepak)
console.log("JOHN :",highScorers.john)



console.log("if you scored more than john please send me the screen shot we will update the score board 🏆")









