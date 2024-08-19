#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getRandomNumber } from '../src/index.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Калькулятор"');

const userName = getName();

export const getAnswerResult = () => {
	
    console.log('Чтобы победить в игре нужно дать 3 правильных ответа подряд.');
    
    const aggregateAnswers = [];
    let i = 0;

    for (i; i < 3; i++) {
        
        const firstNumber = getRandomNumber(101, 1);
        const lastNumber = getRandomNumber(101, 1);
        const operators = ['+', '-', '*'];
        const randomOperator = operators[getRandomNumber(operators.length)];
        const textExpression = `${firstNumber} ${randomOperator} ${lastNumber}`;
        const expressionResult = eval(textExpression);
        const expressionResultToStr = String(expressionResult);

        console.log(`Какой результат выражения?\nВыражение: ${textExpression}?`);

        const getUserAnswer = readlineSync.question('Ваш ответ: ');

        if (getUserAnswer === expressionResultToStr) {
            aggregateAnswers.push(`выражение: ${textExpression}; ваш ответ: ${getUserAnswer}; правильный ответ: ${expressionResult}`);
            console.log('Верно!\n---------------------------------------------');
        } else {
            aggregateAnswers.push(`выражение: ${textExpression}; ваш ответ: ${getUserAnswer}; правильный ответ: ${expressionResult}`);
            console.log(`"${getUserAnswer}" - неправильный ответ. Правильный ответ "${expressionResult}"\nПопробуйте снова, ${userName}.\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
            break;
        };
        if (i === 2) {
            console.log(`Поздравляю, ${userName}, вы победили в игре "Калькулятор"!\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
        };
    };
};
getAnswerResult();