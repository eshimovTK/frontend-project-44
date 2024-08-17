#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Чёт-нечёт"');

const userName = getName();

export const getAnswerIsEvenNumber = () => {
	console.log('Чтобы пройти испытание нужно дать 3 правильных ответа подряд.\nОтветь "да", если число чётное или "нет", если нечётное.');
    const aggregateAnswerIsEven = [];
    const aggregateAnswers = [];

    while (aggregateAnswerIsEven.length !== 3) {
        const number = Math.floor(Math.random() * 100);
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
            aggregateAnswers.push(`число: ${number}; ответ: ${answerIsEven}`);
        } else {
            console.log(`"${answerIsEven}" - неправильный ответ. Правильный ответ "${isEvenToString}"\n${userName}, твои ответы обнулились. Дайте 3 правильных ответа подряд.\n---------------------------------------------`);
            aggregateAnswerIsEven.splice(0, aggregateAnswerIsEven.length);
            aggregateAnswers.push(`число: ${number}; ответ: ${answerIsEven}`);
        };
    };
    return aggregateAnswers;
};

const aggregateAnswers = getAnswerIsEvenNumber();

console.log(`Поздравляю, ${userName}, ты победил в игре "Чёт-нечёт"!\nНиже статистика ответов:`);
console.log(aggregateAnswers);