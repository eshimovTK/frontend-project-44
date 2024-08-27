import { getRandomNumber, startGames } from '../index.js';

const gameName = 'brain-gcd';
const description = 'Find the greatest common divisor of given numbers.';

const startGcdGames = () => {
  const randomNumber1 = getRandomNumber(1);
  const randomNumber2 = getRandomNumber(1);
  const getGCD = () => {
    let a = randomNumber1;
    let b = randomNumber2;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  };
  const question = [randomNumber1, randomNumber2].join(' ');
  const correctAnswer = getGCD(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};
export default () => startGames(description, startGcdGames, gameName);
