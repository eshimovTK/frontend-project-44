#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Чёт-нечёт"');

const userName = getName();

export const getAnswerIsEvenNumber = () => {
	console.log('Чтобы пройти испытание нужно дать 3 правильных ответа.\nОтветьте "да", если число чётное или "нет", если нечётное.');
    const aggregateAnswerIsEven = [];

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
            console.log('Верно!');
            aggregateAnswerIsEven.push(`число: ${number}; ответ: ${answerIsEven}`);
        } else {
            console.log(`"${answerIsEven}" - неправильный ответ. Правильный ответ "${isEvenToString}"`);
        };
    };
};

getAnswerIsEvenNumber();

console.log(`Поздравляю, ${userName}, ты победил в игре "Чёт-нечёт"!`);