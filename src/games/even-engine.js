import readlineSync from 'readline-sync';
import {
  getName, getRandomNumber, startMassage, checkingAnswers, getCorrectAnswer,
} from '../index.js';

const startIsEvenGame = () => {
  startMassage();
  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    const modulo = randomNumber % 2;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(modulo);
    const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i, randomNumber);

    if (endingGame === false) {
      break;
    }
  }
};
export default startIsEvenGame;
