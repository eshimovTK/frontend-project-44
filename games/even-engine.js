import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getCorrectAnswer } from '../src/index.js';

export const startIsEvenGame = (gameName) => {
    startMassage(gameName);
    const userName = getName();
    console.log('Ответьте "да", если число чётное или "нет", если нечётное.');

    for (let i = 0; i < 3; i++) {
        const randomNumber = getRandomNumber();
        const modulo = randomNumber % 2;
        console.log(`Чётное ли число ${randomNumber}?`);
        const userAnswer = readlineSync.question('Ваш ответ: ');
        const correctAnswer = getCorrectAnswer(modulo);
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i);
        
        if (endingGame === false) {
            break;
        };
    };
};