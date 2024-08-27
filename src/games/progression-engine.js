import { getRandomNumber, startGames } from '../index.js';

const gameName = 'brain-prime';
const description = 'What number is missing in the progression?';

const startProgressionGame = () => {
  const startNumber = getRandomNumber();
  const progressionDifference = getRandomNumber(2, 10);
  const progressionLength = getRandomNumber(5, 10);
  const getProgression = () => {
    const progression = [];
    let startNumberProgression = startNumber;
    while (progression.length <= progressionLength) {
      startNumberProgression += progressionDifference;
      progression.push(startNumberProgression);
    }
    return progression;
  };
  const progression = getProgression();
  const hidenPosition = getRandomNumber(0, progressionLength);
  const correctAnswer = progression[hidenPosition];
  progression[hidenPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => startGames(description, startProgressionGame, gameName);
