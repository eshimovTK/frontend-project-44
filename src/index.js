import readlineSync from 'readline-sync';

export const getName = () => {
	const name = readlineSync.question('Назовите своё имя: ');
	console.log (`Привет, ${name}!`);
	return name;
};
export const getRandomNumber = (range) => {
    const number = Math.floor(Math.random() * range);
    return number;
}