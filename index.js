console.clear();

const readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question('Before we start with quiz, Please enter your name: ');

console.log(chalk.bold.red.bgWhite('\t\t  -------- Test Your Mind !! --------  '));
console.log(chalk.magentaBright(`\n\tThe quiz has two levels :
\n\tLevel Zero : contains 6 questions, \n\t\t\t\tto pass it you have to give 5 correct answers
\n\tLevel One : contains 4 questions, \n\t\t\t\tto pass it you have to give 3 correct answers`));

console.log(chalk.bold.red.bgWhite(`\n\n\t\t  -------- ${chalk.underline(`Level Zero Started, Best Of Luck ${username} !!`)} --------  \n`));

var levelZeroScore = 0;

const levelZeroQuestionBank = [
  {
    question: 'If soccer is called football in England, what is American football called in England?',
    choice: ['American football', 'Combball', 'Handball', 'Touchdown'],
    answer: 0,
  },
  {
    question: 'What is the largest country in the world?',
    choice: ['Russia', 'Canada', 'China', 'United States'],
    answer: 0,
  },
  {
    question: 'A doctor with a PhD is a doctor of what?',
    choice: ['Philosophy', 'Psychology', 'Phrenology', 'Physical Therapy'],
    answer: 0,
  },
  {
    question: 'What year did World War I begin?',
    choice: ['1914', '1905', '1919', '1925'],
    answer: 0,
  },
  {
    question: 'Which of these countries is NOT a part of the Asian continent?',
    choice: ['Suriname', 'Georgia', 'Russia', 'Singapore'],
    answer: 0,
  },
  {
    question: 'Which is the largest freshwater lake in the world?',
    choice: ['Lake Superior', 'Caspian Sea', 'Lake Michigan', 'Lake Huron'],
    answer: 1,
  }
];

for (let val = 0; val < levelZeroQuestionBank.length; val++) {
  console.log(`\nQ${val + 1}`);
  play(levelZeroQuestionBank[val]);
  console.log(chalk.red.bold(`\nCurrent Score: ${levelZeroScore}`));
}

function play({ question, choice, answer }) {

  const index = readlineSync.keyInSelect(choice, question);

  if (index === answer) {
    levelZeroScore++;
  }
}

if (levelZeroScore >= 5) {
  console.log(chalk.white.bgRed.bold(`\n\t  Congrats !! you have passed the ${chalk.italic('Level Zero')}  \n`));

  console.log(chalk.magentaBright('\n\tStarting Level One...\n'));
  startLevelTwo();
}
else {
  console.log(chalk.white.bgRed.bold('\n\tBetter Luck Next Time\n'));
}

function startLevelTwo() {

  console.log(chalk.bold.red.bgWhite(`\n\n\t\t  -------- ${chalk.underline(`Level One Started, Best Of Luck ${username} !!`)} --------  \n`));

  var levelOneScore = 0;

  const levelOneQuestionBank = [
    {
      question: 'Which of the following is NOT a word used to describe an earthquake?',
      choice: ['Drop-slide', 'Foreshock', 'Strike-slip', 'Temblor'],
      answer: 0,
    },
    {
      question: 'What country is the second largest in the world by area?',
      choice: ['Russia', 'Canada', 'China', 'United States'],
      answer: 1,
    },
    {
      question: 'What is the oldest Disney film?',
      choice: ['Snow White and the Seven Dwarfs', 'Pinocchio', 'Dumbo', 'Fantasia'],
      answer: 0,
    },
    {
      question: 'What is the scientific name of the knee cap?',
      choice: ['Patella', 'Femur', 'Foramen Magnum', 'Scapula'],
      answer: 0,
    }
  ];

  for (let val = 0; val < levelOneQuestionBank.length; val++) {
    console.log(`\nQ${val + 1}`);
    play(levelOneQuestionBank[val]);
    console.log(chalk.red.bold(`\nCurrent Score: ${levelOneScore}`));
  }

  function play({ question, choice, answer }) {

    const index = readlineSync.keyInSelect(choice, question);

    if (index === answer) {
      levelOneScore++;
    }
  }

  if (levelOneScore >= 3) {
    console.log(chalk.white.bgRed.bold(`\n\t  Congrats !! you have passed the ${chalk.italic('Level One')}  too  \n\n\t  Pat Your Back.  \n`));
  }
  else {
    console.log(chalk.white.bgRed.bold('\n\tBetter Luck Next Time\n'));
  }

}
