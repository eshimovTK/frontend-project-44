import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 ? 'no' : 'yes');

const getDataGame = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
