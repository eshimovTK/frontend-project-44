import { getRandomNumber, startGames } from '../index.js';

const gameName = 'brain-calc';
const description = 'What is the result of the expression?';

const startCalcGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  let result = 0;
  switch (randomOperator) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }
  const correctAnswer = result;
  return [question, correctAnswer];
};
export default () => startGames(description, startCalcGame, gameName);
