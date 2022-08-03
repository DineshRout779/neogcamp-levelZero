var readlineSync = require("readline-sync");

var chalk = require("chalk");

var score = 0;

var highScores = [
  {
    name: "Dinesh",
    score: 8,
  },
  {
    name: "Rupam",
    score: 6,
  },
];

var questions = [
  {
    question: "Where do I live in? ",
    answer: "Balasore",
  },
  {
    question: "Who is my favorite superhero? ",
    answer: "Iron man",
  },
  {
    question: "Where would I like to spend vacation? sea or mountain? ",
    answer: "sea",
  },
  {
    question: "What do I prefer Android or IOS? ",
    answer: "Android",
  },
  {
		question: "What do I prefer windows or mac?",
		answer: "windows",
	},
];

function welcome() {
  var user = readlineSync.question("What's your name? ");

  console.log(`\nWelcome ${user}! How well do you know Dinesh?`);
}

function play(question, answer) {
  var userAns = readlineSync.question(question);

  console.log(`you entered ${userAns}`);

  if (userAns.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.green("You're right"));
    score = score + 2;
  } else {
    console.log(chalk.red("You're wrong!"));
  }
  console.log(`SCORE: ${score}`);
}

function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    console.log(`\nQuestion ${i + 1}:\n-----------`);
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function checkHighScore() {
  if (score > 0) {
    console.log(`\n\nWOW!! You scored ${score}`);
  } else if (score === 0) {
    console.log(`\n\nYou scored ${score}. Its ok that you don't know me.`);
  } else {
    console.log(`\n\nYou scored ${score}`);
  }
  for (let i = 0; i < highScores.length; i++) {
    let currentScore = highScores[i];
    if (score > currentScore.score) {
      console.log(chalk.green(`Congratulations!! You made a highscore. `));
      console.log(
        "You can send me a screenshot to get your score to be added to the highscore list."
      );
    }
  }
}

welcome();
game();
checkHighScore();
