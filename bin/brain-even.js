#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getRandomNumber } from '../src/index.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Чёт-нечёт"');

const userName = getName();

export const getAnswerIsEvenNumber = () => {
	
    console.log('Чтобы победить в игре нужно дать 3 правильных ответа подряд.\nОтветь "да", если число чётное или "нет", если нечётное.');
    
    const aggregateAnswers = [];
    let i = 0;

    for (i; i < 3; i++) {
        
        const number = getRandomNumber(0, 101);
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
            aggregateAnswers.push(`число: ${number}; ваш ответ: ${answerIsEven}; правильный ответ: ${isEvenToString}`);
            console.log('Верно!\n---------------------------------------------');
        } else {
            aggregateAnswers.push(`число: ${number}; ваш ответ: ${answerIsEven}; правильный ответ: ${isEvenToString}`);
            console.log(`"${answerIsEven}" - неправильный ответ. Правильный ответ "${isEvenToString}"\nПопробуйте снова, ${userName}.Ниже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
            break;
        };
        if (i === 2) {
            console.log(`Поздравляю, ${userName}, вы победили в игре "Чёт-нечёт"!\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
            
        };
    };
};

getAnswerIsEvenNumber();