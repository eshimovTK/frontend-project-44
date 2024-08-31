import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataGame = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = randomNumber % 2 ? 'no' : 'yes';
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
