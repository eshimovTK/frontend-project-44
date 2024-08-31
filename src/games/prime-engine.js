import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getDataGame = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  let correctAnswer = '';
  if (isPrimeNumber()) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
