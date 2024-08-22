import readlineSync from 'readline-sync';
import { getName, getRandomNumber, startMassage, checkingAnswers } from '../src/index.js';

export const startCalcGame = (gameName) => {
    startMassage(gameName);
    const userName = getName();
    for (let i = 0; i < 3; i++) {
        const randomNumber1 = getRandomNumber();
        const randomNumber2 = getRandomNumber();
        const operators = ['+', '-', '*'];
        const randomOperator = operators[getRandomNumber(0, operators.length)];
        const textExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
        const expressionResult = eval(textExpression);
        const correctAnswer = String(expressionResult);
        console.log(`What is the result of the expression?\nQuestion: ${textExpression}?`);
        const userAnswer = readlineSync.question('Your answer: ');
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i);
        
        if (endingGame === false) {
            break;
        };
    };
};