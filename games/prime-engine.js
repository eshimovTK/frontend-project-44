import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getCorrectAnswer, isPrimeNumber } from '../src/index.js';

export const startPrimeGame = (gameName) => {
	startMassage(gameName);
    const userName = getName();
    console.log('Ответь "да", если число простое или "нет", если нет.');

    for (let i = 0; i < 3; i++) {
        
        const randomNumber = getRandomNumber(2);
        const isPrime = isPrimeNumber(randomNumber);
        console.log(`Простое ли число ${randomNumber}?`);
        const userAnswer = readlineSync.question('Ваш ответ: ');
        const correctAnswer = getCorrectAnswer(isPrime);
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i);
        
        if (endingGame === false) {
            break;
        };
    };
};
