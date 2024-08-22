import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getProgression } from '../src/index.js';

export const startProgressionGame = (gameName) => {
	startMassage(gameName);
    const userName = getName();
    
    for (let i = 0; i < 3; i++) {
        const beginNumberProgression = getRandomNumber();
        const progressionDifference = getRandomNumber(2, 10);
        const progressionLength = getRandomNumber(5, 10);
        let progression = getProgression(beginNumberProgression, progressionDifference, progressionLength);
        const hidenPosition = getRandomNumber(0, progressionLength);
        const correctNumber = progression[hidenPosition];
        progression[hidenPosition] = '..';
        const correctAnswer = String(correctNumber);
        const question = progression.join(', ');
        console.log(`What number is missing in the progression?\nQuestion: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i, question);
        
        if (endingGame === false) {
            break;
        };
    };
};
