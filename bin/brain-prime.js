#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getRandomNumber, isPrimeNumber } from '../src/index.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Простое число"');

const userName = getName();

export const getAnswerIsPrimeNumber = () => {
	
    console.log('Чтобы победить в игре нужно дать 3 правильных ответа подряд.\nОтветь "да", если число простое или "нет", если нет.');
    
    const aggregateAnswers = [];
    let i = 0;

    for (i; i < 3; i++) {
        
        const number = getRandomNumber(100, 2);
        const isPrime = isPrimeNumber(number);
        let isPrimeToString = '';
        console.log(`Простое ли число ${number}?`);
        const answerIsPrime = readlineSync.question('Ваш ответ: ');
        
        if (isPrime === true) {
            isPrimeToString = 'да';
        } else {
            isPrimeToString = 'нет';
        };
        if (isPrimeToString === answerIsPrime.toLowerCase()) {
            aggregateAnswers.push(`число: ${number}; ваш ответ: ${answerIsPrime}; правильный ответ: ${isPrimeToString}`);
            console.log('Верно!\n---------------------------------------------');
        } else {
            aggregateAnswers.push(`число: ${number}; ваш ответ: ${answerIsPrime}; правильный ответ: ${isPrimeToString}`);
            console.log(`"${answerIsPrime}" - неправильный ответ. Правильный ответ "${isPrimeToString}"\nПопробуйте снова, ${userName}. Ниже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
            break;
        };
        if (i === 2) {
            console.log(`Поздравляю, ${userName}, вы победили в игре "Простое число"!\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
            
        };
    };
};

getAnswerIsPrimeNumber();