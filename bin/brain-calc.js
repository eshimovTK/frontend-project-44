#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
import { getRandomNumber } from '../src/getRandomNumber.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Калькулятор"');

const userName = getName();

export const getAnswerResult = () => {
	
    console.log('Чтобы победить в игре нужно дать 3 правильных ответа подряд.');
    
    const aggregateAnswers = [];
    let i = 0;

    for (i; i <= 3; i++) {
        
        const firstNumber = getRandomNumber(100);
        const lastNumber = getRandomNumber(100);
        const operators = ['+', '-', '*'];
        const randomOperator = getRandomNumber(operators.length);
        const textExpression = `${firstNumber} ${randomOperator} ${lastNumber}`;
        const expressionToInt = parseInt(textExpression);

        console.log(`Какой результат выражения?\nВыражение: ${textExpression}?`);

        const getUserAnswer = readlineSync.question('Ваш ответ: ');

        if (getUserAnswer === expressionToInt) {
            console.log('Верно!\n---------------------------------------------');
            aggregateAnswers.push(`выражение: ${textExpression}; ваш ответ: ${getUserAnswer}; правильный ответ: ${expressionToInt}`);
        } else {
            console.log(`"${getUserAnswer}" - неправильный ответ. Правильный ответ "${expressionToInt}"\nПопробуйте снова, ${userName}.\nНиже статистика ответов:\n---------------------------------------------`);
            aggregateAnswers.push(`выражение: ${textExpression}; ваш ответ: ${getUserAnswer}; правильный ответ: ${expressionToInt}`);
            console.log(aggregateAnswers);
            break;
        };
        if (i === 3) {
            console.log(`Поздравляю, ${userName}, ты победил в игре "Калькулятор"!\nНиже статистика ответов:`);
            console.log(aggregateAnswers);
        };
    };
};