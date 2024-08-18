#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getRandomNumber } from '../src/index.js';

console.log('Добро пожаловать, в "Игры разума"!\nИгра "Прогрессия"');

const userName = getName();

export const getAnswerResult = () => {
	
    console.log('Чтобы победить в игре нужно дать 3 правильных ответа подряд.');
    
    const aggregateAnswers = [];
    let i = 0;

    for (i; i < 3; i++) {
        
        let beginNumberProgression = getRandomNumber(100);
        const progressionDifference = getRandomNumber(10);
        const hidenPosition = getRandomNumber(10);
        let hidenNumber = 0;
        const progression = [];
        
        while(progression.length < 10) {
            beginNumberProgression += progressionDifference;
            if (hidenPosition === progression.length) {
                progression.push('..');
                hidenNumber = beginNumberProgression;
            } else {
                progression.push(beginNumberProgression);
            };
        };
        const expressionResultToStr = String(hidenNumber);
        const progressionToString = progression.join(', ');

        console.log(`Какое число пропущенно в прогрессии?\nПрогрессия: ${progressionToString}`);

        const getUserAnswer = readlineSync.question('Ваш ответ: ');

        if (getUserAnswer === expressionResultToStr) {
            aggregateAnswers.push(`Прогрессия: ${progressionToString}; ваш ответ: ${getUserAnswer}; правильный ответ: ${hidenNumber}`);
            console.log('Верно!\n---------------------------------------------');
        } else {
            aggregateAnswers.push(`Прогрессия: ${progressionToString}; ваш ответ: ${getUserAnswer}; правильный ответ: ${hidenNumber}`);
            console.log(`"${getUserAnswer}" - неправильный ответ. Правильный ответ "${hidenNumber}"\nПопробуйте снова, ${userName}.\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
            break;
        };
        if (i === 2) {
            console.log(`Поздравляю, ${userName}, вы победили в игре "Прогрессия"!\nНиже статистика ответов:\n---------------------------------------------`);
            console.log(aggregateAnswers);
        };
    };
};
getAnswerResult();