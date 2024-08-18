#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getRandomNumber, getGCD } from '../src/index.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Наибольший общий делитель"');

const userName = getName();

export const getAnswerResult = () => {
	
    console.log('Чтобы победить в игре нужно дать 3 правильных ответа подряд.');
    
    const aggregateAnswers = [];
    let i = 0;

    for (i; i < 3; i++) {
        
        const firstNumber = getRandomNumber(100);
        const lastNumber = getRandomNumber(100);
        const getResultGCD = getGCD(firstNumber, lastNumber);
        const expressionResultToStr = String(getResultGCD);

        console.log(`Какой наибольший общий делитель у этих чисел?\nЧисла: ${firstNumber} и ${lastNumber}`);

        const getUserAnswer = readlineSync.question('Ваш ответ: ');

        if (getUserAnswer === expressionResultToStr) {
            aggregateAnswers.push(`Числа: ${firstNumber} и ${lastNumber}; ваш ответ: ${getUserAnswer}; правильный ответ: ${getResultGCD}`);
            console.log('Верно!\n---------------------------------------------');
        } else {
            aggregateAnswers.push(`Числа: ${firstNumber} и ${lastNumber}; ваш ответ: ${getUserAnswer}; правильный ответ: ${getResultGCD}`);
            console.log(`"${getUserAnswer}" - неправильный ответ. Правильный ответ "${getResultGCD}"\nПопробуйте снова, ${userName}.\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
            break;
        };
        if (i === 2) {
            console.log(`Поздравляю, ${userName}, вы победили в игре "Наибольший общий делитель"!\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
        };
    };
};
getAnswerResult();