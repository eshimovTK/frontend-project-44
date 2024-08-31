import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataGame = () => {
  const randomNumber = getRandomNumber();
  const modulo = randomNumber % 2;
  const question = randomNumber;
  let correctAnswer = '';
  if (modulo) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
