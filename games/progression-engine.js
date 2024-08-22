import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getProgression } from '../src/index.js';

const startProgressionGame = () => {
	const gameName = 'brain-progression';
    startMassage(gameName);
    const userName = getName();
    console.log(`What number is missing in the progression?`);
    for (let i = 0; i < 3; i++) {
        const beginNumberProgression = getRandomNumber();
        const progressionDifference = getRandomNumber(2, 10);
        const progressionLength = getRandomNumber(5, 10);
        let progression = getProgression(beginNumberProgression, progressionDifference, progressionLength);
        const hidenPosition = getRandomNumber(0, progressionLength);
        const correctNumber = progression[hidenPosition];
        progression[hidenPosition] = '..';
        const correctAnswer = String(correctNumber);
        const question = progression.join(' ');
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i, question);
        
        if (endingGame === false) {
            break;
        };
    };
};
export default startProgressionGame;
