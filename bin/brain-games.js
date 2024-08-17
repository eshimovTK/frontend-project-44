#!/usr/bin/env node
import { getName } from '../src/cli.js';
import { getAnswerIsEvenNumber } from '../bin/brain-even.js';

console.log('Добро пожаловать, в "Игры разума"!');
const userName = getName();
getAnswerIsEvenNumber();
console.log(`Поздравляю, ${userName}, ты победил!`);
