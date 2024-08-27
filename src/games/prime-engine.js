import { getRandomNumber, startGames } from '../index.js';

const gameName = 'brain-prime';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataGame = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const isPrimeNumber = () => {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        return false;
      }
    }
    return randomNumber > 1;
  };
  let correctAnswer = '';
  if (isPrimeNumber()) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame, gameName);
