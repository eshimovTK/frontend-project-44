import readlineSync from 'readline-sync';
import {
  getName, getRandomNumber, startMassage, checkingAnswers, getGCD,
} from '../index.js';

const startGcdGames = () => {
  const gameName = 'brain-gcd';
  startMassage(gameName);
  const userName = getName();

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomNumber(1);
    const randomNumber2 = getRandomNumber(1);
    const question = [randomNumber1, randomNumber2].join(' ');
    const getResultGCD = getGCD(randomNumber1, randomNumber2);
    const correctAnswer = String(getResultGCD);
    console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i, question);

    if (endingGame === false) {
      break;
    }
  }
};
export default startGcdGames;
