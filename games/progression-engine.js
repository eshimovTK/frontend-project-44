import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getProgression } from '../src/index.js';

export const startProgressionGame = (gameName) => {
	startMassage(gameName);
    const userName = getName();
    
    for (let i = 0; i < 3; i++) {
        const beginNumberProgression = getRandomNumber();
        const progressionDifference = getRandomNumber(2, 10);
        let progression = getProgression(beginNumberProgression, progressionDifference);
        const hidenPosition = getRandomNumber(0, 10);
        const correctNumber = progression[hidenPosition];
        progression[hidenPosition] = '..';
        const correctAnswer = String(correctNumber);
        const progressionToString = progression.join(', ');
        console.log(`What number is missing in the progression?\nQuestion: ${progressionToString}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i);
        
        if (endingGame === false) {
            break;
        };
    };
};
