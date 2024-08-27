import { getRandomNumber, startGames } from '../index.js';

const gameName = 'brain-even';
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
export default () => startGames(description, getDataGame, gameName);
