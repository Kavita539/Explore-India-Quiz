var readLineSync=require("readline-sync");//this lib is used to take the i/p
var chalk=require("chalk");//this lib is used to beautify the app
var score=0;//current score
var userName=readLineSync.question("Hello! Enter your name :\n->");
console.log(chalk.black.bgRed.bold("\n\t\t\t\tWelcome ")+chalk.black.bgRed.bold(userName)+chalk.black.bgRed.bold(" To 'EXPLORE INDIA QUIZ'\n"));
console.log("RULES : 1)There are going to be 10 questions\n\t\t2)Each correct answer will give you 1 point\n\t\t3)There is no negative marking :)\n")
console.log(chalk.rgb(15, 100, 204).inverse("\t\t\t***********So lets start with the quiz!***********\n"))
console.log(chalk.bold.rgb(10, 100, 200)("Score before the quiz : 0\n"))

function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("\nYou're right! Congrats you gain 1 point:)"));
    score=score+1;
  }
  else{
    console.log(chalk.red("\nYou're wrong! OOPS:("));
  }
  console.log(chalk.yellow("Your current score is : "+score));
  console.log(chalk.grey.bold("\n------------------------\n"));
  
}

// an array of highscores is created to show highscorers in the quiz
var highScores=[{
  name:"Kavita",
  score:10
},{
  name:"Aakanksha",
  score:8
}
]

// an array of questions is created
var questions = [{
  question:"1) What is the capital city of India?\nA)Mumbai\nB)Gandhinagar\nC)Delhi\n(Choose one of the above)\n-->",
  answer:"C"
},{
  question:"2) What is the currency of India?\nA)Yen\nB)Rupee\nC)Peso\n(Choose one of the above)\n-->",
  answer:"B"
},{
  question:"3) Delhi is located along what river?\nA)River Ganga\nB)River Yamuna\nC)River Brahmaputra\n(Choose one of the above)\n-->",
  answer:"B"
},{
  question:"4) When is India's Independence Day celebrated?\nA)16 August\nB)25 Jan\nC)15 August\n(Choose one of the above)\n-->",
  answer:"C"
},{
  question:"5) Who was the first Women Prime Minister of india?\nA)Indira Gandhi\nB)Pratibha Patil\nC)Sarojini Naidu\n(Choose one of the above)\n-->",
  answer:"A"
},{
  question:"6) What Inian city is capital of two states?\nA)Chandigarh\nB)Kolkata\nC)Mumbai\n(Choose one of the above)\n-->",
  answer:"A"
},{
  question:"7) When Indian won its first Individual olympic Gold medal?\nA)Rio 2016\nB)Beijing 2008\nC)London 2012\n(Choose one of the above)\n-->",
  answer:"B"
},{
  question:"8) Who was the president of India in 2009?\nA)Pratibha Patil\nB)Indira Gandhi\nC)Govind Singh\n(Choose one of the above)\n-->",
  answer:"A"
},{
  question:"9) What is India's smallest state by area?\nA)Puducherry\nB)Goa\nC)Kerala\n(Choose one of the above)\n-->",
  answer:"B"
},{
  question:"10) The Victoria Memorial Hall is located in which Indian City?\nA)Lucknow\nB)Pune\nC)Kolkata\n(Choose one of the above)\n-->",
  answer:"C"
}
]

 for(var i=0;i<questions.length;i=i+1){
   var currentQuestion=questions[i];
   play(currentQuestion.question,currentQuestion.answer)
 }

 console.log("YAY you completed the quiz!\nHope you got to know little about India :)\nYou Scored : ",score);
 console.log("\n--------------------------------");
 console.log(chalk.magenta("Score Board of High Scores : "));
 console.log("--------------------------------");
   

 for(var j=0;j<highScores.length;j=j+1){
   var currentHighScore=highScores[j];
   console.log(currentHighScore.name);
   console.log(currentHighScore.score);
 }

 //  if else statement to update the highscorer accordingly
 if(score >= highScores[0,1].score) {
    console.log(chalk.red.italic("\nCongratulations!!!\n"));
    console.log("*************************************");
    console.log(chalk.bold.cyan("Since you are one of the highscorers, send me a screenshot and I'll update one of the Highscorers as you..."));
  } else {
   console.log(chalk.red("\nSorry, You haven't beaten the Highscore, Please try again :)\n"));
}


