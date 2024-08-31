import startGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const getProgression = (number, length, difference) => {
  const progression = [number];
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + difference);
  }
  return progression;
};

const getDataGame = () => {
  const startNumber = getRandomNumber();
  const progressionDifference = getRandomNumber(2, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progression = getProgression(startNumber, progressionLength, progressionDifference);
  const hidenPosition = getRandomNumber(0, progressionLength);
  const correctAnswer = String(progression[hidenPosition]);
  progression[hidenPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => startGames(description, getDataGame);
