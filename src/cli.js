import { readlineSync } from 'readline-sync';

export const startBrainGames = () => {
    console.log('brain-games\nWelcome to the Brain Games!');
    const name = readlineSync.question('Your answer: ');
    console.log(`Hello, ${name}!`);
};
