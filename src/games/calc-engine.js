import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const calculation = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 0;
  }
};

const getDataGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculation(randomOperator, randomNumber1, randomNumber2));
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
