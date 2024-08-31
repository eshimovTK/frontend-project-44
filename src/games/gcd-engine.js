import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getDataGame = () => {
  const randomNumber1 = getRandomNumber(1);
  const randomNumber2 = getRandomNumber(1);
  const question = [randomNumber1, randomNumber2].join(' ');
  const correctAnswer = String(getGCD(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
