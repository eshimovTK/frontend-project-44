import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getGCD } from '../src/index.js';

export const startGcdGames = (gameName) => {
    startMassage(gameName);
    const userName = getName();

    for (let i = 0; i < 3; i++) {
        const randomNumber1 = getRandomNumber(1);
        const randomNumber2 = getRandomNumber(1);
        const getResultGCD = getGCD(randomNumber1, randomNumber2);
        const correctAnswer = String(getResultGCD);
        console.log(`Какой наибольший общий делитель у этих чисел?\nЧисла: ${randomNumber1} и ${randomNumber2}`);
        const userAnswer = readlineSync.question('Ваш ответ: ');

        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i);
        
        if (endingGame === false) {
            break;
        };
    };
};