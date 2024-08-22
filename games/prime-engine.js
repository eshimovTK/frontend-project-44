import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers, getCorrectAnswer, isPrimeNumber } from '../src/index.js';

export const startPrimeGame = () => {
	const gameName = 'brain-prime';
    startMassage(gameName);
    const userName = getName();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i++) {
        
        const randomNumber = getRandomNumber(2);
        const isPrime = isPrimeNumber(randomNumber);
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = getCorrectAnswer(isPrime);
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i, randomNumber);
        
        if (endingGame === false) {
            break;
        };
    };
};
