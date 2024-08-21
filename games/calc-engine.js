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
        console.log(`Какой результат выражения?\nВыражение: ${textExpression}?`);
        const userAnswer = readlineSync.question('Ваш ответ: ');
        const endingGame = checkingAnswers(userName, userAnswer, correctAnswer, i);
        
        if (endingGame === false) {
            break;
        };
    };
};