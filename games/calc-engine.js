import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers } from '../src/index.js';

export const startCalcGame = () => {
    const gameName = 'brain-calc';
    startMassage(gameName);
    const userName = getName();
    for (let i = 0; i < 3; i++) {
        const randomNumber1 = getRandomNumber();
        const randomNumber2 = getRandomNumber();
        const operators = ['+', '-', '*'];
        const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
        const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
        const expression = eval(question);
        const correctAnswer = String(expression);
        console.log(`What is the result of the expression?\nQuestion: ${question}?`);
        const userAnswer = readlineSync.question('Your answer: ');
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i, question);
        
        if (endingGame === false) {
            break;
        };
    };
};
export default startCalcGame;
