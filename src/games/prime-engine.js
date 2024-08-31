import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getDataGame = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
