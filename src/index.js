import readlineSync from 'readline-sync';

export const getRandomNumber = (min = 0, max = 100) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

export const startGames = (description, getDataGame, gameName) => {
  console.log(`${gameName}\n`);
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getDataGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
