var readlineSync = require('readline-sync');

var chalk = require('chalk');

var score = 0;

var highScores = [
	{
		name: "Dinesh",
		score: 6,
	}
]


var questions = [
	{
		question: "What is the real name of hulk? ",
		options: [
			"Bruce banner",
			"Tony stark",
			"Clint Barton",
			"Bruce stark"
		],
		answer: "Bruce Banner",
	},
	{
		question: "What was the wifi password of kamartaj? ",
		options: [
			"kamartaj",
			"shambella",
			"kaicellius",
			"password"
		],
		answer: "shambella",
	},
	{
		question: "What magic does wanda does? ",
		options: [
			"Asgardian Magic",
			"Mirror Dimension Magic",
			"Eye of Agamotto",
			"chaos magic"
		],
		answer: "Chaos magic",
	},
	{
		question: "Which suit Tony used in infinity war? ",
		options: [
			"Mark 43",
			"mark 85",
			"mark 42",
			"Mark 50"
		],
		answer: "mark 50",
	},
	{
		question: "What is the real name of Captain America? ",
		options: [
			"Steve Roggers",
			"Tony Stark",
			"Bruce Banner",
			"Clint Barton"
		],
		answer: "Steve Roggers",
	},
]


function welcome() {
	var user = readlineSync.question("What's your name? ");

	console.log(`\nWelcome to marvel quiz ${user}.`);
}


function play(question,options, answer) {
	console.log(chalk.blue(question));
	
	console.log(chalk.yellow("\nOptions:\n"))
	for(let i =0; i< options.length; i++){
		console.log(options[i]);
	}

	var userAns = readlineSync.question("\nEnter your answer: ");
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
		console.log(`\nQuestion ${i + 1}:\n-----------`)
		play(currentQuestion.question,currentQuestion.options, currentQuestion.answer)
	}
}



function checkHighScore() {
	if (score > 0) {
		console.log(`\n\nWOW!! You scored ${score}`);
	} else if (score === 0) {
		console.log(`\n\nYou scored ${score}. Its ok that you don't know me.`);
	}
	else {
		console.log(`\n\nYou scored ${score}`);
	}
	for (let i = 0; i < highScores.length; i++) {
		let currentScore = highScores[i];
		if (score > currentScore.score) {
			console.log(chalk.green(`Congratulations!! You made a highscore. You beat ${currentScore.name} by ${score - currentScore.score} `))
			console.log('You can send me a screenshot to get your score to be added to the highscore list.')
		}
	}
}

welcome();
game();
checkHighScore();

