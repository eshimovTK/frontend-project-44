#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
import { getRandomNumber } from '../src/getRandomNumber.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Чёт-нечёт"');

const userName = getName();

export const getAnswerIsEvenNumber = () => {
	console.log('Чтобы пройти испытание нужно дать 3 правильных ответа подряд.\nОтветь "да", если число чётное или "нет", если нечётное.');
    const aggregateAnswerIsEven = [];
    const aggregateAnswers = [];

    while (aggregateAnswerIsEven.length !== 3) {
        const number = getRandomNumber(100);
        const isEven = number % 2;
        let isEvenToString = '';
        console.log(`Чётное ли число ${number}?`);
        const answerIsEven = readlineSync.question('Ваш ответ: ');
        if (isEven === 0) {
            isEvenToString = 'да';
        } else {
            isEvenToString = 'нет';
        };
        if (isEvenToString === answerIsEven.toLowerCase()) {
            console.log('Верно!\n---------------------------------------------');
            aggregateAnswerIsEven.push('x')
            aggregateAnswers.push(`число: ${number}; ваш ответ: ${answerIsEven}; правильный ответ: ${isEvenToString}`);
        } else {
            console.log(`"${answerIsEven}" - неправильный ответ. Правильный ответ "${isEvenToString}"\n${userName}, твои ответы обнулились. Дайте 3 правильных ответа подряд.\n---------------------------------------------`);
            aggregateAnswerIsEven.splice(0, aggregateAnswerIsEven.length);
            aggregateAnswers.push(`число: ${number}; ваш ответ: ${answerIsEven}; правильный ответ: ${isEvenToString}`);
        };
    };
    return aggregateAnswers;
};

const aggregateAnswers = getAnswerIsEvenNumber();

console.log(`Поздравляю, ${userName}, ты победил в игре "Чёт-нечёт"!\nНиже статистика ответов:`);
console.log(aggregateAnswers);