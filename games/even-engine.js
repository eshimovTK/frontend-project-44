import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getCorrectAnswer } from '../src/index.js';

export const startIsEvenGame = (gameName) => {
    startMassage(gameName);
    const userName = getName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i++) {
        const randomNumber = getRandomNumber();
        const modulo = randomNumber % 2;
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = getCorrectAnswer(modulo);
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i);
        
        if (endingGame === false) {
            break;
        };
    };
};