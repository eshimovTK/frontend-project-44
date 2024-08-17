import readlineSync from 'readline-sync';

export const getName = () => {
	const name = readlineSync.question('Назовите своё имя: ');
	console.log (`Привет, ${name}!`);
	return name;
};
